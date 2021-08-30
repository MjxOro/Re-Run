import React from "react";
import Header from "../../components/Header/Header";
import jsonData from "../../cardData.json";
import Post from "../../components/Post/Post";
import SimpleMap from "../../components/Maps/Maps";
import axios from "axios";
import { Route } from "react-router-dom";
import Geocode from "react-geocode";

class PostPage extends React.Component {
  state = {
    heroObj: jsonData,
    index: 0,
    currentUser: null,
    filterPost: null,
    allUsers: null,
    loaction: null,
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
    Geocode.setLocationType("APPROXIMATE");
    const token = sessionStorage.getItem("token");
    axios
      .get((process.env.REACT_APP_API_URL || "") + "/secure/current/user", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ currentUser: res.data });
        return axios.get(
          (process.env.REACT_APP_API_URL || "") + "/secure/all/postings",
          { headers: { authorization: `Bearer ${token}` } }
        );
      })
      .then((res) => {
        const filtered = res.data.find((post) => {
          return post._id === this.props.match.params.id;
        });
        console.log(filtered);
        this.setState({ filterPost: filtered });
        return axios.get(
          (process.env.REACT_APP_API_URL || "") + "/secure/all/users",
          { headers: { authorization: `Bearer ${token}` } }
        );
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ allUsers: res.data });
        return Geocode.fromAddress(this.state.filterPost.location);
      })
      .then((res) => {
        console.log(res.results[0].geometry.location);
        this.setState({ location: res.results[0].geometry.location });
      })
      .catch((err) => {
        console.log(err);
      });

    const timer = sessionStorage.getItem("timer");
    if (!timer) {
      sessionStorage.setItem("timer", +new Date());
    } else {
      const now = +new Date();
      const timeCheck = now - timer;
      if (timeCheck > 60000) {
        axios
          .put(
            (process.env.REACT_APP_API_URL || "") + "/secure/add/points",
            {},
            { headers: { authorization: `Bearer ${token}` } }
          )
          .then(() => {
            sessionStorage.setItem("timer", +new Date());
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    console.log(sessionStorage.getItem("timer"));
  };
  getChatCreation = (data) => {
    const token = sessionStorage.getItem("token");
    axios
      .post(
        (process.env.REACT_APP_API_URL || "") + "/secure/create/chat",
        data,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        this.props.history.push("/chat");
      });
  };

  render = () => {
    return (
      <>
        {this.state.currentUser &&
          this.state.filterPost &&
          this.state.allUsers &&
          this.state.location && (
            <>
              <Route
                render={(routerProps) => (
                  <Header
                    currentUser={this.state.currentUser}
                    {...routerProps}
                  />
                )}
              />
              <Post
                getChatCreation={this.getChatCreation}
                allUsers={this.state.allUsers}
                currentUser={this.state.currentUser}
                data={this.state.filterPost}
                index={this.state.index}
              />
              <SimpleMap center={this.state.location} />
            </>
          )}
      </>
    );
  };
}
export default PostPage;

import react from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import GetStarted from "../../components/GetStarted/GetStarted";
import axios from "axios";

class LandingPage extends react.Component {
  state = {
    postCards: [],
    title2: ["Run", "Fresh", "Cycle"],
    index: 0,
    direction: [5000, -5000],
  };

  componentDidMount = () => {
    //Gets data from server to load the animated cards of whats being sold.
    axios
      .get((process.env.REACT_APP_API_URL || "") + "/preview")
      .then((res) => {
        this.setState({ postCards: res.data });
      });
    this.myInterval = setInterval(() => {
      console.log("HELLO");
      if (this.state.index < 2) {
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 0 });
      }
    }, 3500);
  };
  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render = () => {
    return (
      <>
        {this.state.postCards && (
          <section>
            <BackgroundAnimation
              direction={this.state.direction[0]}
              cardData={this.state.postCards}
            />
            <BackgroundAnimation
              direction={this.state.direction[1]}
              cardData={this.state.postCards}
            />
            <BackgroundAnimation
              direction={this.state.direction[0]}
              cardData={this.state.postCards}
            />
            <GetStarted cycle={this.state.title2[this.state.index]} />
          </section>
        )}
      </>
    );
  };
}
export default LandingPage;

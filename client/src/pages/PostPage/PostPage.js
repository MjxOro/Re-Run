import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import Post from '../../components/Post/Post'
import SimpleMap from '../../components/Maps/Maps'
import axios from 'axios'
import { Route } from 'react-router-dom'

class PostPage extends React.Component{
	state = {
		heroObj: jsonData,
		index: 0,
		currentUser: null,
		filterPost: null,

	}
	componentDidMount = () =>{
		const token = sessionStorage.getItem("token")
		axios.get(process.env.REACT_APP_API_URL+'/secure/current/user', {
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
		.then(res =>{
			this.setState({currentUser: res.data})
			return (axios.get(process.env.REACT_APP_API_URL+'/secure/all/postings',{headers:{authorization: `Bearer ${token}`}}))
		})
		.then(res =>{
			const filtered = res.data.find(post =>{return post._id === this.props.match.params.id})
			console.log(filtered)
			this.setState({filterPost: filtered})
		})
		.catch(err =>{
			console.log(err)
		})
	}
	

	render = () =>{
		return(
			<>
				{this.state.currentUser && this.state.filterPost &&
				<>
				<Route  render ={(routerProps)=>
					<Header currentUser={this.state.currentUser} {...routerProps} />
				}/>
				<Post currentUser={this.state.currentUser} data={this.state.filterPost} index={this.state.index} />
				<SimpleMap/>
				</>
				}
			</>
		)
	}
}
export default PostPage

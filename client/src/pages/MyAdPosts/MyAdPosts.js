import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import Post from '../../components/Post/Post'
import SimpleMap from '../../components/Maps/Maps'
import axios from 'axios'
import { Route } from 'react-router-dom'
import MyAds from '../../components/MyAds/MyAds'
import DeleteModal from '../../components/DeleteModal/DeleteModal'

class MyAdPosts extends React.Component{
	state = {
		heroObj: jsonData,
		userPosts: [],
		index: null,
		currentUser: null,
		show:false,
		postId: null,

	}
	componentDidMount = () =>{
		this.setState({index: this.props.match.params.id-1})
		const token = sessionStorage.getItem("token")
		axios.get(process.env.REACT_APP_API_URL+'/secure/current/user', {
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
		.then(res =>{
			this.setState({currentUser: res.data})
			return (axios.get(process.env.REACT_APP_API_URL+'/secure/user/posts',{headers: {authorization: `Bearer ${token}`}}))
		})
		.then(res => {
			console.log(res.data)
			this.setState({userPosts: res.data})
		})
		.catch(err =>{
			console.log(err)
		})
	}
	componentDidUpdate = async (prevProps, prevState) =>{

	}
	handleDelete = async () =>{
		console.log(this.props.match)
		const token = sessionStorage.getItem("token")
		 await axios.delete(process.env.REACT_APP_API_URL + '/secure/delete/post/' + this.state.postId,{
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
		.then(res =>{
			console.log(res)
		})
		.catch(err =>{console.log(err)})

		this.props.history.go(0)

		
	}
	handleGoback = () =>{
		this.props.history.goBack()
	}
	handleClose = () =>{
		this.setState({show: false})
	}
	handleOpenDelete = (e) =>{
		console.log(e.target.id)
		e.stopPropagation()
		this.setState({
			show: true,
			postId: e.target.id,
		})
	}

	render = () =>{
		return(
			<>
				<DeleteModal data={this.state.userPosts} postId={this.state.postId} close={this.handleClose} show={this.state.show} handleDelete={this.handleDelete}/>
				{this.state.currentUser && this.state.userPosts &&
				<>
				<Route  render ={(routerProps)=>
					<Header currentUser={this.state.currentUser} {...routerProps} />
				}/>
					<MyAds handleGoback={this.handleGoback} data={this.state.userPosts} handleOpenDelete={this.handleOpenDelete}/>

				</>
				}
			</>
		)
	}
}
export default MyAdPosts

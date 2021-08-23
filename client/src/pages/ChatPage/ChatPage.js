import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import MainContent from '../../components/MainContent/MainContent'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Chat from '../../components/Chat/Chat'

class ChatPage extends React.Component{
	state = {
		index: 0,
		currentUser: null,
		allPost: null,
		show: false,
		channelLink: "",

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
			console.log(res.data)
			this.setState({allPost: res.data})
		})
		.catch(err =>{
			console.log(err)
		})
		
		const sendBirdHeader = { header: { "Content-Type": "application/json; charset=utf8", "Api-Token": process.env.SENDBIRD_KEY}}


		
	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}
	getUrl = (data) =>{
		console.log(data)
		if(data){
			this.setState({
				channelLink: data.url,
				show: true,
			})
		}

	}
	handleGoback = () =>{
		this.setState({
			show: false,
		})

	}



	render = () =>{
		return(
			<>
				{this.state.currentUser && this.state.allPost && 
					<>
					<Route  render ={ (routerProps)=>
						<Header currentUser={this.state.currentUser} {...routerProps} />
					}/>
					<Chat handleGoback={this.handleGoback} show={this.state.show} getUrl={this.getUrl} channelLink={this.state.channelLink} currentUser={this.state.currentUser} />
					</>
				}
			</>
		)
	}
}
export default ChatPage

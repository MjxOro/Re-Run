import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import Post from '../../components/Post/Post'
import SimpleMap from '../../components/Maps/Maps'
import axios from 'axios'
import { Route } from 'react-router-dom'
import MyAds from '../../components/MyAds/MyAds'

class MyAdPosts extends React.Component{
	state = {
		heroObj: jsonData,
		index: null,
		currentUser: null,

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
			console.log(res)
			this.setState({currentUser: res.data})
		})
		.catch(err =>{
			console.log(err)
		})
	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}
	handleGoback = () =>{
		this.props.history.goBack()
	}

	render = () =>{
		return(
			<>
				{this.state.currentUser &&
				<>
				<Route  render ={(routerProps)=>
					<Header currentUser={this.state.currentUser} {...routerProps} />
				}/>
					<MyAds handleGoback={this.handleGoback} data={this.state.heroObj}/>

				</>
				}
			</>
		)
	}
}
export default MyAdPosts

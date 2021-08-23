import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Category from '../../components/Category/Category'

class Clothing extends React.Component{
	state = {
		heroObj: jsonData,
		userPosts: [],
		currentUser: null,
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
			return (axios.get(process.env.REACT_APP_API_URL+'/secure/all/postings',{headers: {authorization: `Bearer ${token}`}}))
		})
		.then(res => {
			console.log(res.data)
			const filtered = res.data.filter(post =>{return post.category === "clothing"})
			this.setState({userPosts: filtered})
		})
		.catch(err =>{
			console.log(err)
		})
	}
	handleGoback = () =>{
		this.props.history.goBack()
	}

	render = () =>{
		return(
			<>
				{this.state.currentUser && this.state.userPosts &&
				<>
				<Route  render ={(routerProps)=>
					<Header currentUser={this.state.currentUser} {...routerProps} />
				}/>
					<Category handleGoback={this.handleGoback} categoryName={"Clothing"} data={this.state.userPosts}/>

				</>
				}
			</>
		)
	}
}
export default Clothing

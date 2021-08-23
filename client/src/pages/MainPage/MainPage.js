import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import MainContent from '../../components/MainContent/MainContent'
import { Route } from 'react-router-dom'
import axios from 'axios'
import fillerData from '../../'

class MainPage extends React.Component{
	state = {
		index: 0,
		currentUser: null,
		allPost: null,
		premiumPosts: [],
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
			const premium = res.data.filter(post => {return post.premium === true})
			console.log(premium)
			const premiumIndex = Math.floor(premium.length / 2)
			this.setState({
				allPost: res.data,
				premiumPosts: premium,
				index: premiumIndex,
			})
		})
		.catch(err =>{
			console.log(err)
		})
	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}

	handleSlideLeft = () =>{
		if(this.state.index > -1){
			this.setState({index: this.state.index - 1})
		}

	}
	handleSlideRight = () =>{
		if(this.state.index < this.state.premiumPosts.length){
			this.setState({index: this.state.index + 1})
		}

	}

	render = () =>{
		return(
			<>
				{this.state.currentUser && this.state.allPost && this.state.premiumPosts && this.state.index > -1 &&
					<>
					<Route  render ={ (routerProps)=>
						<Header currentUser={this.state.currentUser} {...routerProps} />
					}/>
					<Hero data={!this.state.premium ? this.state.allPost : this.state.premium} index={this.state.index} slideRight={this.handleSlideRight} slideLeft={this.handleSlideLeft}/>
					<MainContent data={this.state.allPost} />
					</>
				}
			</>
		)
	}
}
export default MainPage

import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import jsonData from '../../cardData.json'
import MainContent from '../../components/MainContent/MainContent'
import { Route } from 'react-router-dom'
import axios from 'axios'

class MainPage extends React.Component{
	state = {
		index: 0,
		currentUser: null,
		allPost: null,

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
	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}

	handleSlideLeft = () =>{
		if(this.state.index > -1){
			this.setState({index: this.state.index - 1})
		}

	}
	handleSlideRight = () =>{
		if(this.state.index < this.state.heroObj.length){
			this.setState({index: this.state.index + 1})
		}

	}

	render = () =>{
		return(
			<>
				{this.state.currentUser && this.state.allPost && 
					<>
					<Route  render ={ (routerProps)=>
						<Header currentUser={this.state.currentUser} {...routerProps} />
					}/>
					<Hero data={this.state.allPost} index={this.state.index} slideRight={this.handleSlideRight} slideLeft={this.handleSlideLeft}/>
					<MainContent data={this.state.allPost} />
					</>
				}
			</>
		)
	}
}
export default MainPage

import react from 'react'
import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation'
import Header from '../../components/Header/Header'
import Data from '../../cardData.json'
import GetStarted from '../../components/GetStarted/GetStarted'


class LandingPage extends react.Component{
	state ={
		postCards: Data,
		title2: ['Run','Fresh','Cycle'],
		index: 0,
		direction: [1000,-1000],
	}

	componentDidMount = () =>{
		//Gets data from server to load the animated cards of whats being sold.
		this.myInterval = setInterval(()=>{
			console.log('HELLO')
			if(this.state.index < 2){
				this.setState({index: this.state.index + 1})
			}
			else{
				this.setState({index: 0})
			}
		},5000)

	}
	componentWillUnmount = () =>{
		clearInterval(this.myInterval)
	}



	render = () =>{
		return(
			<section>
				<BackgroundAnimation direction={this.state.direction[0]} cardData={this.state.postCards}/>
				<BackgroundAnimation direction={this.state.direction[1]} cardData={this.state.postCards}/>
				<BackgroundAnimation direction={this.state.direction[0]} cardData={this.state.postCards}/>
				<GetStarted cycle={this.state.title2[this.state.index]}/>
			</section>
		)
	}
}
export default LandingPage

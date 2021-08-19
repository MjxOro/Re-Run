import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import jsonData from '../../cardData.json'
import MainContent from '../../components/MainContent/MainContent'

class MainPage extends React.Component{
	state = {
		heroObj: jsonData,
		index: 0,

	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}
	componentDidMount = () =>{
		this.setState({index: this.getIndex()})
	}
	getIndex = () =>{
		return Math.floor(this.state.heroObj.length / 2)
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
				<Header />
				<Hero data={this.state.heroObj} index={this.state.index} slideRight={this.handleSlideRight} slideLeft={this.handleSlideLeft}/>
				<MainContent data={this.state.heroObj} />
			</>
		)
	}
}
export default MainPage

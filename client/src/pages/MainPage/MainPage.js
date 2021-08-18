import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import jsonData from '../../cardData.json'

class MainPage extends React.Component{
	state = {
		heroObj: jsonData,
		index: 0,

	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}

	handleSlideLeft = () =>{
		if(this.state.index > -1){
			this.setState({index: this.state.index - 1})
		}

		console.log(this.state.index)
	}
	handleSlideRight = () =>{
		if(this.state.index < this.state.heroObj.length){
			this.setState({index: this.state.index + 1})
		}
		console.log(this.state.index)

	}

	render = () =>{
		return(
			<>
				<Header />
				<Hero data={this.state.heroObj} index={this.state.index} slideRight={this.handleSlideRight} slideLeft={this.handleSlideLeft}/>
			</>
		)
	}
}
export default MainPage

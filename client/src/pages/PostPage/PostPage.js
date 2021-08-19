import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import Post from '../../components/Post/Post'
import LoginForm from '../../components/LoginForm/LoginForm'

class PostPage extends React.Component{
	state = {
		heroObj: jsonData,
		index: null,

	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}
	componentDidMount = () =>{
		this.setState({index: this.props.match.params.id-1})
	}

	render = () =>{
		return(
			<>
				<Header />
				<Post data={this.state.heroObj} index={this.state.index} />
			</>
		)
	}
}
export default PostPage

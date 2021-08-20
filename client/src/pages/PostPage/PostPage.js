import React from 'react'
import Header from '../../components/Header/Header'
import jsonData from '../../cardData.json'
import Post from '../../components/Post/Post'
import SimpleMap from '../../components/Maps/Maps'

class PostPage extends React.Component{
	state = {
		heroObj: jsonData,
		index: null,

	}
	componentDidUpdate = (prevProps, prevState) =>{
	

	}
	componentDidMount = () =>{
		this.setState({index: this.props.match.params.id-1})
		window.scrollTo(0,0)
	}

	render = () =>{
		return(
			<>
				<Header />
				<Post data={this.state.heroObj} index={this.state.index} />
				<SimpleMap/>
			</>
		)
	}
}
export default PostPage

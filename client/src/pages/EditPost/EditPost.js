import { motion } from 'framer-motion'
import React from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { Route } from 'react-router-dom'
import EditPostForm from '../../components/EditPostForm/EditPostForm'


class EditPost extends React.Component {
	state = {
		currentUser: null,
		previewImg: null,
		files: null,
		postInfo:{},


	}
	componentDidMount = () => {
		const token = sessionStorage.getItem("token")
		axios.get((process.env.REACT_APP_API_URL || "")+'/secure/current/user', {
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
	handleChange = (e) =>{
		this.setState({ postInfo:{ ...this.state.postInfo, [e.target.name]: e.target.value }})
		console.log([e.target.name],[e.target.value],[e.target.files])
		console.log(this.state.postInfo)
	}
	handleChangeImg = (e) =>{
		console.log(e.target.files)
		this.setState({
			files: e.target.files[0],
			previewImg: URL.createObjectURL(e.target.files[0])
		})
	}
	handleGoback = () =>{
		this.props.history.goBack()
	}
	handleUpload = (e) =>{
		e.preventDefault()
		const token = sessionStorage.getItem("token")
		const formData = new FormData()
		formData.append("image",!this.state.files ? null : this.state.files)
		formData.append("title",!this.state.postInfo.title ? null : this.state.postInfo.title)
		formData.append("price",!this.state.postInfo.price ? null : this.state.postInfo.price)
		formData.append("location",!this.state.postInfo.location ? null : this.state.postInfo.location)
		formData.append("category",!this.state.postInfo.category ? null : this.state.postInfo.category)
		formData.append("description",!this.state.postInfo.description ? null : this.state.postInfo.description)
		formData.append("premium",!this.state.postInfo.premium ? null : this.state.postInfo.premium)

	if(formData.get("premium") !== "true"){
			console.log(formData.get("premium"))
			axios.put((process.env.REACT_APP_API_URL || "") + '/secure/edit/post/' + this.props.match.params.id, formData,{
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
				}
			})
			.then(res =>{
				console.log(res)

			})
			.catch(err =>{console.log(err)})

			this.props.history.push('/')
	}
	else {
		axios.put((process.env.REACT_APP_API_URL || "") + '/secure/remove/points',{},{headers: {authorization: `Bearer ${token}`}})
			.then((res) =>{
				return(axios.put((process.env.REACT_APP_API_URL || "") + '/secure/edit/post/' + this.props.match.params.id, formData,{headers: {authorization: `Bearer ${token}`,	"Content-Type": "multipart/form-data",}}))
			})
		.then(res =>{
		})
		.catch(err =>{
			console.log(err)
		})
			this.props.history.push('/')
	}
	
}

	

	render = () =>{
		return(
			<>
				{this.state.currentUser &&
				<>
				<Route render ={(routerProps)=>
					<Header currentUser={this.state.currentUser} {...routerProps} />
				}/>
				<EditPostForm handleGoback={this.handleGoback} currentUser={this.state.currentUser} handleUpload={this.handleUpload} previewImg={this.state.previewImg} handleChangeImg={this.handleChangeImg} handleChange={this.handleChange} />
				</>
				}
			</>
		)
	}

}
export default EditPost


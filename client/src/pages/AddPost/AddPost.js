import { motion } from 'framer-motion'
import React from 'react'
import AddPostForm from '../../components/AddPostForm/AddPostForm'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { Route } from 'react-router-dom'


class AddPost extends React.Component {
	state = {
		currentUser: null,
		postInfo: {premium: false, category: "electronics", title: "",price: "",location: "",description: ""},
		previewImg: null,
		files: null,


	}
	componentDidMount = () => {
		const token = sessionStorage.getItem("token")
		axios.get(process.env.REACT_APP_API_URL+'/secure/current/user', {
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
		.then((res) =>{
			console.log(res.data)
			this.setState({currentUser: res.data})
		})
		.catch(err =>{
			console.log(err)
		})
		console.log(this.state.currentUser)
	}
	handleChange = (e) =>{
		this.setState({ postInfo:{ ...this.state.postInfo, [e.target.name]: e.target.value }})
		console.log(e.target.value)
		console.log(this.state.postInfo)
	}
	handleChangeImg = (e) =>{
		console.log("WORING")
		this.setState({
			files: e.target.files[0],
			previewImg: URL.createObjectURL(e.target.files[0])
		})
		console.log(this.state.previewImg)
	}
	handleUpload = (e) =>{
		e.preventDefault()
		const token = sessionStorage.getItem("token")
		const formData = new FormData()
		formData.append("image",this.state.files)
		formData.append("title",this.state.postInfo.title)
		formData.append("price",this.state.postInfo.price)
		formData.append("location",this.state.postInfo.location)
		formData.append("category",this.state.postInfo.category)
		formData.append("description",this.state.postInfo.description)
		formData.append("premium",this.state.postInfo.premium)

	if(formData.get("premium") !== "true"){
		console.log("BRUH")
		axios.post(process.env.REACT_APP_API_URL + '/secure/add/post', formData,{
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
		axios.put(process.env.REACT_APP_API_URL + '/secure/remove/points',{},{headers: {authorization: `Bearer ${token}`}})
				.then((res) =>{
					return(axios.post(process.env.REACT_APP_API_URL + '/secure/add/post', formData,{headers:{authorization: `Bearer ${token}`,"Content-Type": "multipart/form-data",}}))
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
					<Header  currentUser={this.state.currentUser} {...routerProps} />
				}/>
				<AddPostForm currentUser={this.state.currentUser} handleUpload={this.handleUpload} previewImg={this.state.previewImg} handleChangeImg={this.handleChangeImg} handleChange={this.handleChange} />
				</>
				}
			</>
		)
	}

}
export default AddPost


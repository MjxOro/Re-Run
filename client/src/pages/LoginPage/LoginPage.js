import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import axios from 'axios'


class LoginPage extends React.Component{
	state = {
		userInfo: null,
		formImg: null,
		err: {email: false, password: false, valid: false}
	}
	componentDidMount = () =>{
		this.setState({formImg: Math.floor(Math.random() * 3 + 1)})
	}
	handleChange = (e) =>{
		this.setState({ userInfo:{ ...this.state.userInfo, [e.target.name]: e.target.value }})
		console.log(this.state.userInfo)
	}

	handleLogin = (e) =>{
		e.preventDefault()
		const data = e.target
		let formErr = {email:false, password:false}
		if(!data.email.value || !data.password.value){
			if(data.email.value === ''){
				formErr.email = true
				this.setState({err: formErr})
			}
			if(data.password.value === ''){
				formErr.password = true
				this.setState({err: formErr})
			}
		}
		else{
			const url = 'http://localhost:8080/users/login' //Put on .env file
			axios.post(url,this.state.userInfo)
			.then(res =>{
				sessionStorage.setItem("token", res.data.token)
				this.props.history.push("/")
			})
			.catch(error =>{
				formErr.valid = true
				this.setState({err: formErr})
				console.log(error.data)
			})
		}
	}


	render = () =>{
		return(
			<>
				<LoginForm error={this.state.err} random={this.state.formImg} handleChange={this.handleChange} handleLogin={this.handleLogin}/>
			</>
		)
	}

}
export default LoginPage

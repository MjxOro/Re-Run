import React from 'react'
import Header from '../../components/Header/Header'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import axios from 'axios'


class SignUp extends React.Component{
	state = {
		userInfo: null,
		formImg: null,
		err: {username:false, email:false, validEmail: false, password:false},
	}

	componentDidMount = () =>{
		this.setState({formImg: Math.floor(Math.random() * 3 + 1)})
	}

	handleChange = (e) =>{
		console.log([e.target.value])
		this.setState({
			userInfo: { ...this.state.userInfo, [e.target.name]: e.target.value }
		})
	}

	handleSignUp = (e) =>{
		e.preventDefault()
	const emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		const data = e.target
		let formErr = {username:false, email:false, password:false}
		if(!data.username.value || !data.email.value || !data.password.value){
			console.log(e.target.username.value)

			if(data.username.value === ''){
				formErr.username = true
				this.setState({err: formErr})
			}
			if(data.email.value === ''){
				formErr.email = true
				this.setState({err: formErr})
			}
			else if(!emailRegex.test(String(e.target.email.value.toLowerCase()))){
				formErr.validEmail = true
				this.setState({err: formErr})
			}
			if(data.password.value === ''){
				formErr.password = true
				this.setState({err: formErr})
			}
		}
		else if(!emailRegex.test(String(this.state.userInfo.email.toLowerCase()))){
				console.log('PING')
				formErr.validEmail = true
				this.setState({err: formErr})
		}
		else{
			axios.post(process.env.REACT_APP_API_URL +'/users/register', this.state.userInfo)
			.then(res =>{
				sessionStorage.setItem("token", res.data.token)
				this.props.history.push("/login")
			})
			.catch(error =>{
				console.log(error)
			})
		}
	}

	render = () =>{
		console.log(this.state.err)
		return(
			<>
				<SignUpForm error={this.state.err} handleChange={this.handleChange} rng={this.state.formImg} handleSignUp={this.handleSignUp}/>
			</>
		)
	}

}
export default SignUp

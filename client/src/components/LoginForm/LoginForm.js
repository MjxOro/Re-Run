
import { Link } from 'react-router-dom'
import './LoginForm.scss'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) =>{

	const history = useHistory()
	function random (){

		switch (props.random){
			case 1:
			return(<figure className='login__art-container' />)
			break;
			case 2:
			return(<figure className='login__art-container login__art-container--img1' />)
			break;
			case 3:
			return(<figure className='login__art-container login__art-container--img2' />)
			break;
			default:
			return(<figure className='login__art-container' />)
		}
	}
	function errorLabel(){
		if(props.error.email){
			return(
				<label className='signup__error'>Field is required</label>
			)
		}
		else if(props.error.valid){
			return(
				<label className='signup__error'>Email and/or password is incorrect</label>
			)
		}
		else{
			return(
				<label className='signup__error signup__error--hidden' />
			)
		}
	}
	return(
		<section className='login'>
			<form onSubmit={props.handleLogin} className='login__form'>
				<main className='login__left'>
					<h1 className='login__title'>Log in</h1>
					<div className='login__Oauth'>
					</div>
					<label className='login__label'>Email</label>
					<input onChange={props.handleChange} name='email' className={props.error.email || props.error.valid ? 'login__input login__input--error' : 'login__input'} placeholder='Jeff@apple.com'/>
					{errorLabel()}

					<label className='login__label'>Password</label>
					<input onChange={props.handleChange} name='password' type='password' className={props.error.email || props.error.valid ? 'login__input login__input--error' : 'login__input'} placeholder='Choose a strong password'/>
					{errorLabel()}
					<button  className='login__button'>Log in</button>
					<div className='login__login-container'>
						<p className='login__text'>Dont have an account? </p>
						<Link to='/register' className='login__link'>Sign Up</Link>
					</div>
				</main>
				{ 
					random()
				}
			</form>
		</section>
	)
}

export default LoginForm

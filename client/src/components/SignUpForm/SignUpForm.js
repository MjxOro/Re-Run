
import { Link } from 'react-router-dom'
import './SignUpForm.scss'

const SignUpForm = () =>{

	return(
		<section className='signup'>
			<form className='signup__form'>
				<h1 className='signup__title'>Sign Up</h1>
				<label className='signup__label'>Username</label>
				<input name='username' className='signup__input' placeholder='Username'/>
				<label className='signup__label'>Email</label>
				<input name='email' className='signup__input' placeholder='Jeff@apple.com'/>
				<label className='signup__label'>Password</label>
				<input name='password' className='signup__input' placeholder='Choose a strong password'/>
				<button className='signup__button'>Create Account</button>
				<div className='signup__login-container'>
					<p className='signup__text'>Already have an account? </p>
					<Link to='/login' className='signup__link'>Log in</Link>
				</div>
			</form>
		</section>
	)
}

export default SignUpForm

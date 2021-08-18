
import { Link } from 'react-router-dom'
import './SignUpForm.scss'
import art from '../../assets/formImage3.jpeg'

const SignUpForm = () =>{

	function random (){
		const random = Math.floor(Math.random()*3 + 1)

		switch (random){
			case 1:
			return(<figure className='signup__art-container' />)
			break;
			case 2:
			return(<figure className='signup__art-container signup__art-container--img1' />)
			break;
			case 3:
			return(<figure className='signup__art-container signup__art-container--img2' />)
			break;
			default:
			return(<figure className='signup__art-container' />)
		}

	}
	return(
		<section className='signup'>
			<form className='signup__form'>
				<main className='signup__left'>
					<h1 className='signup__title'>Sign Up</h1>
					<div className='signup__Oauth'>
					</div>
					<label className='signup__label'>Username</label>
					<input name='username' className='signup__input' placeholder='Username'/>
					<label className='signup__label'>Email</label>
					<input name='email' className='signup__input' placeholder='Jeff@apple.com'/>
					<label className='signup__label'>Password</label>
					<input name='password' type='password' className='signup__input' placeholder='Choose a strong password'/>
					<button className='signup__button'>Create Account</button>
					<div className='signup__login-container'>
						<p className='signup__text'>Already have an account? </p>
						<Link to='/login' className='signup__link'>Log in</Link>
					</div>
				</main>
				{ 
					random()
				}
			</form>
		</section>
	)
}

export default SignUpForm

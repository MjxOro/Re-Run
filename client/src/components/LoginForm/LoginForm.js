
import { Link } from 'react-router-dom'
import './LoginForm.scss'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) =>{

	const history = useHistory()
	function random (){
		const random = Math.floor(Math.random()*3 + 1)

		switch (random){
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
	function handleSubmit(e){
		e.preventDefault()
		if(e.target.email.value && e.target.password.value){
			history.push('/home')
		}

	}
	return(
		<section className='login'>
			<form onSubmit={handleSubmit} className='login__form'>
				<main className='login__left'>
					<h1 className='login__title'>Log in</h1>
					<div className='login__Oauth'>
					</div>
					<label className='login__label'>Email</label>
					<input name='email' className='login__input' placeholder='Jeff@apple.com'/>
					<label className='login__label'>Password</label>
					<input name='password' type='password' className='login__input' placeholder='Choose a strong password'/>
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

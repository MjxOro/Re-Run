import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './LoginForm.scss'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) =>{
	const history = useHistory()
	const container = {
		show: {
			transition: {
				staggerChildren: 0.35,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 200 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1.6,
			},
		},
		exit: {
			opacity: 0,
			y: -200,
			transition: {
				ease: "easeInOut",
				duration: 0.8,
			},
		},
	};

	const itemMain = {
		hidden: { opacity: 0, y: 200 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1.6,
			},
		},
	};

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
	function errorLabel(err){
		if(err){
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
			<motion.form
			onSubmit={props.handleLogin}
			variants={itemMain}
			initial="hidden"
			animate="show"
			exit="exit"
			className='login__form'
			>
				<main className='login__left'>
					<h1 className='login__title'>Log in</h1>
					<div className='login__Oauth'>
					</div>
					<label className='login__label'>Email</label>
					<input onChange={props.handleChange} name='email' className={props.error.email || props.error.valid ? 'login__input login__input--error' : 'login__input'} placeholder='Jeff@apple.com'/>
					{errorLabel(props.error.email)}

					<label className='login__label'>Password</label>
					<input onChange={props.handleChange} name='password' type='password' className={props.error.password || props.error.valid ? 'login__input login__input--error' : 'login__input'} placeholder='Choose a strong password'/>
					{errorLabel(props.error.password)}
					<button  className='login__button'>Log in</button>
					<div className='login__login-container'>
						<p className='login__text'>Dont have an account? </p>
						<Link to='/register' className='login__link'>Sign Up</Link>
					</div>
				</main>
				{ 
					random()
				}
			</motion.form>
		</section>
	)
}

export default LoginForm

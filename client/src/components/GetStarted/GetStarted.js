import './GetStarted.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const GetStarted = (props) =>{
	return(
		<main className='start'>
			<div className='start__container'>
				<figure className='start__logo' />
				<h1 className='start__title'>Find your way to</h1>
				<div className='start__slogan'>
					<AnimatePresence>
					<h1 className='start__text'>RE-</h1>
					<motion.h1 
					key={props.cycle}
					initial={{
						opacity: 0,
						y: '-2rem',

					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 1,
							ease: "easeInOut"
						}
					}}
					className='start__text2'>{props.cycle}</motion.h1>
					</AnimatePresence>
				</div>
				<Link to='/register' className='start__btn'>Get Started</Link>
			</div>
		</main>
	)
}
export default GetStarted

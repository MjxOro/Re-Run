import './Post.scss'
import { motion } from 'framer-motion'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

const Post = (props) => {
	const index=props.index
	//Animations
	function responsiveAnimate(){
		if(window.innerWidth < 768){
			return {
				y:'0.75rem',
				scale:1.1,
				height:'15rem',
				transition: {delay:0.2, ...transition}
			}
		}
		else if (window.innerWidth < 1280){
			return {
				y:'1.75rem',
				scale:1.1,
				height:'28rem',
				transition: {delay:0.2, ...transition}
			}
		}
		else{
			return {
				y:'2.25rem',
				scale:1.1,
				height:'40rem',
				width: '1280px',
				transition: {delay:0.2, ...transition}
			}
		}
	}

	function responsiveInitial(){
		if(window.innerWidth < 768){
			return {
				y:'1rem',
				scale:1.1,
				height:'28rem',
			}
		}
		else if (window.innerWidth < 1280){
			return {
				y:'1.75rem',
				scale:1.1,
				height:'35rem',
			}
		}
		else{
			return {
				y:'2.25rem',
				scale:1.1,
				height:'50rem',
				width:'100vw'
			}
		}
	}
	const transition ={
		duration: 1.4,
		ease: [0.6,0.01,-0.05,0.9],
	}
	const filteredUser = props.allUsers.find( user =>{ return user._id===props.data.userId})
	return(
		<>
		{ index === null ?
		<h1>LOADING</h1>
		:
		<motion.section className='post'
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<motion.div className='post__main-container'>
				<div className='post__top'>
					<motion.img src={props.data.image} className='post__img'
					initial={responsiveInitial()}
					animate={responsiveAnimate()}
					/>
					<motion.div  className='post__text-container'
					initial={{opacity:0, x:'-100%'}}
					animate={{
						opacity: 1,
						x: 0,
						transition: {duration: 2, ease: 'easeInOut'},
					}}
					>
						<p className='post__title'>{props.data.title}</p>
						<p className='post__price'>{props.data.description}</p>
						<p className='post__price'>{props.data.price}</p>
						<div className='post__userChat'>
							<img className='post__pfp' src={filteredUser.profilePicture} />
							<p className='post__chat-text' >{"Interested? Message: " + filteredUser.username}</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
			<article className='post__map-api'>
			</article>
		</motion.section>
		}
		</>
	)
}
export default Post

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
	const variants ={
		
	}
	const transition ={
		duration: 1.4,
		ease: [0.6,0.01,-0.05,0.9],
	}
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
					<motion.img src={props.data[index].image} className='post__img'
					initial={responsiveInitial()}
					animate={responsiveAnimate()}
					/>
					<motion.div exit={{opacity:0}} transition={transition} className='post__controls'>
						<FaAngleLeft onClick={props.slideLeft} className={index !== 0 ? 'post__prev' : 'post__prev post__prev--hidden'}/>
						<FaAngleRight onClick={props.slideRight} className={index !== props.data.length-1 ? 'post__next' : 'post__next--hidden'}/>
					</motion.div>
					<motion.div  className='post__text-container'
					initial={{opacity:0, x:'-100%'}}
					animate={{
						opacity: 1,
						x: 0,
						transition: {duration: 2, ease: 'easeInOut'},
					}}
					>
						<p className='post__title'>{props.data[index].title}</p>
						<p className='post__price'>{props.data[index].price}</p>
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

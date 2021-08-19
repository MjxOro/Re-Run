import './Hero.scss'
import { Link,useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = (props) =>{
	let index = props.index;
	const history = useHistory()


	//Animation VARS
	//ease:[0.6,0.01,-0.05,0.9]
	const transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}
	//Map function for multiple premium posts	
	
	return(
		<article className='hero'>
			<section key={props.data[index].title} className='hero__container'>
				<Link to={'/post/' + props.data[index].id}>
				<motion.img src={props.data[index].image} id={props.data[index].id} className='hero__img'
				whileHover={{scale:1.1}}
				transition={transition}
				/>
				</Link>
				<motion.div exit={{opacity:0}} transition={transition} className='hero__searchbar'>
					<input name='search' className='hero__search'/>
					<BsSearch className='hero__btn'/>
				</motion.div>
				<motion.div exit={{opacity:0}} transition={transition} className='hero__category-container'>
					<Link className='hero__category'>Tech</Link>
					<Link className='hero__category hero__category--one'>Clothing</Link>
					<Link className='hero__category hero__category--two'>General</Link>
					<Link className='hero__category hero__category--three'>Gardening</Link>
				</motion.div>
				<motion.div exit={{opacity:0}} transition={transition} className='hero__controls'>
					<FaAngleLeft onClick={props.slideLeft} className={index !== 0 ? 'hero__prev' : 'hero__prev hero__prev--hidden'}/>
					<FaAngleRight onClick={props.slideRight} className={index !== props.data.length-1 ? 'hero__next' : 'hero__next--hidden'}/>
				</motion.div>
				<motion.div exit={{opacity:0}} transition={transition} className='hero__text-container'>
					<p className='hero__title'>{props.data[index].title}</p>
					<p className='hero__price'>{props.data[index].price}</p>
				</motion.div>
			</section>
		</article>
	)
}
export default Hero

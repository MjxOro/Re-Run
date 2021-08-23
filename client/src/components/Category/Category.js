import { Link } from 'react-router-dom'
import './Category.scss'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'

const Category = (props) =>{

const transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}


	return(
		<section className='myads'>
			<motion.div exit={{opacity: 0}} transition={transition} className='myads__container'>
				<div className='myads__header'>
					<FaArrowLeft onClick={props.handleGoback}className='myads__goback'/>
					<h1 className='myads__h1'>{props.categoryName}</h1>
				</div>
				<main className='myads__grid'>
		{props.data.map(card =>(
			<Link to={'/post/' + card._id} className ='main__card-link'>
				<motion.div  className='main__card'
				whileHover={{scale:1.1}}
				transition={transition}
				>
					<img src={card.image} className='main__img' />
					<div className='main__text-container'>
						<p className='main__title'>{card.title}</p>
						<p className='main__price'>{card.price}</p>
					</div>
				</motion.div>
			</Link>

		))}
				 
			</main>
			</motion.div>
		</section>
	)
	
}
export default Category

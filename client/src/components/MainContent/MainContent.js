import './MainContent.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MainContent = (props) =>{

	const transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}

	return(
		<motion.main exit={{opacity: 0}} transition={transition} className='main'>
			<h1 className='main__h1'>What Other People are Selling</h1>
			<div className='main__grid'>
		{props.data.map(card =>(
			<Link to={'/post/' + card.id} className ='main__card-link'>
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
				 
			</div>
		</motion.main>

	)
}

export default MainContent

import './MainContent.scss'
import { motion } from 'framer-motion'

const MainContent = (props) =>{

	const cards = (apiData,direction) =>{
		return (
			<motion.div animate="animate" className='main__card'>
				<figure className='main__img-container'>
					<img src={apiData.image} className='main__image' />
				</figure>
				<div className='main__text-container'>
					<p className='main__title'>{apiData.title}</p>
					<p className='main__price'>{apiData.price}</p>
				</div>
			</motion.div>
		)
	}
	return(
		<main className='main'>
			<h1 className='main__h1'>What Other People are Selling</h1>
			<div className='main__grid'>
				{props.data.map(card => cards(card))}
			</div>
		</main>

	)
}

export default MainContent;

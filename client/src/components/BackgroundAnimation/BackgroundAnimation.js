
import './BackgroundAnimation.scss'
import { motion } from 'framer-motion'

const BackgroundAnimation = (props) =>{
	const marqueeVariants ={
		animate: {
			x: [0,props.direction],
			transition: {
				x:{
					//repeat:Infinity,
					//reapeatType:"loop",
					duration: 6,
					ease: "linear",
				},
			},
		},
	}
	const jsonFile = props.cardData
	//map function here
	const cards = (apiData,direction) =>{
		return (
			<motion.div variants={marqueeVariants} animate="animate" className='banimation__card'>
				<img src={apiData.image} className='banimation__image' />
				<div className='banimation__text-container'>
					<p className='banimation__title'>{apiData.title}</p>
					<p className='banimation__price'>{apiData.price}</p>
				</div>
			</motion.div>
		)

	}
	return(
		<div className='banimation'>
			{jsonFile.map(card => cards(card))}
		</div>
	)
}
export default BackgroundAnimation

import './PointsModal.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImCross,ImCheckmark } from 'react-icons/im'


const PointsModal = (props) =>{
	return(
		<section className={props.show ?'points':'points points--close'}>
			<div className={props.show ?'points__container':'points__container points__container--close'}>

				<div onClick={props.close} className='points__close-btn points__close-btn--container'>
					<ImCross className='points__close-btn'/>
				</div>

					<motion.div  className='points__text-container'
					initial={{opacity:0, x:'-100%'}}
					animate={{
						opacity: 1,
						x: 0,
						transition: {duration: 2, ease: 'easeInOut'},
					}}
					>
						<div  className='points__userChat'>
							<img className='points__pfp' src={props.currentUser.profilePicture} />
							<div className='points__info-container'>
								<p className='points__chat-text' >{`${props.currentUser.username}'s Points:  	`}</p>
								<p className='points__chat-text' >{`${props.currentUser.points}`}</p>
							</div>
						</div>
					</motion.div>
			
				</div>
		</section>
	)
}
export default PointsModal


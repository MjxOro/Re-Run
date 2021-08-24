import './PointsModal.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImCross,ImCheckmark } from 'react-icons/im'


const PointsModal = (props) =>{
	return(
		<section className={props.show ?'post':'post post--close'}>
			<div className={props.show ?'post__container':'post__container post__container--close'}>

				<div onClick={props.close} className='post__close-btn post__close-btn--container'>
					<ImCross className='post__close-btn'/>
				</div>

					<motion.div  className='post__text-container'
					initial={{opacity:0, x:'-100%'}}
					animate={{
						opacity: 1,
						x: 0,
						transition: {duration: 2, ease: 'easeInOut'},
					}}
					>
						<div  className='post__userChat'>
							<img className='post__pfp' src={props.currentUser.profilePicture} />
							<div className='points__info-container'>
								<p className='post__chat-text' >{`${props.currentUser.username}'s Points:  	`}</p>
								<p className='post__chat-text' >{`${props.currentUser.points}`}</p>
							</div>
						</div>
					</motion.div>
			
				</div>
		</section>
	)
}
export default PointsModal


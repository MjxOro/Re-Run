import { Link } from 'react-router-dom'
import './MyAds.scss'
import { motion } from 'framer-motion'
import { FaRegEdit } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FaArrowLeft } from 'react-icons/fa'

const MyAds = (props) =>{


	return(
		<section className='myads'>
			<div className='myads__container'>
				<div className='myads__header'>
					<FaArrowLeft onClick={props.handleGoback}className='myads__goback'/>
					<h1 className='myads__h1'>My Postings</h1>
				</div>
				<main className='myads__grid'>
			{
				props.data.map(card =>(
					<div id={card.id} className='myads__card'>
						<img className='myads__img' src={card.image}/>
						<div className='myads__info-container'>
							<div className='myads__text-container'>
								<p className='myads__title'>{card.title}</p>
								<p className='myads__price'>{card.price}</p>
							</div>
							<div className='myads__icon-container'>
								<Link className='myads__link' to='/edit/post'>
									<FaRegEdit className='myads__edit'/>
								</Link>
								<Link className='myads__link' to='/delete/post'>
									<ImCross className='myads__delete'/>
								</Link>
							</div>
						</div>

					</div>
				))
				
			}
			</main>
			</div>
		</section>
	)
	
}
export default MyAds

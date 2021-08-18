import './Hero.scss'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs'

const Hero = (props) =>{
	let index = props.index;
	console.log(index)
	//Map function for multiple premium posts	
	return(
		<article className='hero'>
			<section key={props.data[index].title} className='hero__container'>
				<img src={props.data[index].image} className='hero__img' />
				<div className='hero__searchbar'>
					<input name='search' className='hero__search'/>
					<BsSearch className='hero__btn'/>
				</div>
				<div className='hero__category-container'>
					<Link className='hero__category'>Tech</Link>
					<Link className='hero__category hero__category--one'>Clothing</Link>
					<Link className='hero__category hero__category--two'>General</Link>
					<Link className='hero__category hero__category--three'>Gardening</Link>
				</div>
				<div className='hero__controls'>
					<FaAngleLeft onClick={props.slideLeft} className={index !== 0 ? 'hero__prev' : 'hero__prev hero__prev--hidden'}/>
					<FaAngleRight onClick={props.slideRight} className={index !== props.data.length-1 ? 'hero__next' : 'hero__next--hidden'}/>
				</div>
				<div className='hero__text-container'>
					<p className='hero__title'>{props.data[index].title}</p>
					<p className='hero__price'>{props.data[index].price}</p>
				</div>
			</section>
		</article>
	)
}
export default Hero

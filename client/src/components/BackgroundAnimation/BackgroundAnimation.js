
import './BackgroundAnimation'

const BackgroundAnimation = (props) =>{
	//map function here
	return(
		<div className='banimation'>
			<div className='banimation__card'>
				<figure className='banimation__image' />
				<div className='banimation__text-container'>
					<p className='banimation__title'></p>
					<p className='banimation__price'></p>
				</div>
			</div>
		</div>
	)
}
export default BackgroundAnimation

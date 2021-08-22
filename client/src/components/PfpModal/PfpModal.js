import './PfpModal.scss'
import { Link } from 'react-router-dom'
import { ImCross,ImCheckmark } from 'react-icons/im'
import { BiImageAdd } from 'react-icons/bi'
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa'

const PfpModal = (props) =>{
	return(
		<section className={props.show ?'pfp':'pfp pfp--close'}>
			<div className={props.show ?'pfp__container':'pfp__container pfp__container--close'}>
				<Link to='/' onClick={props.close} className='pfp__close' />
				<div className='pfp__header'>
					<FaArrowLeft onClick={props.close}className='pfp__goback'/>
					<h1 className='pfp__h1'>Change Profile Picture</h1>
				</div>
				<form onSubmit={props.handleUpload} className='pfp__image'>
					<img src={props.previewImg} className='pfp__preview' / >
					<label htmlFor='uploadImg' className='pfp__label-img'>
						<BiImageAdd className='pfp__upload-icon'/>
					</label>
					<input onChange={props.handleChangeImg} type='file' id='uploadImg' className='pfp__upload' name='image'  /> {/* display None */}
					<button  className='pfp__button'>Change Picture</button>
				</form>
			
			</div>
		</section>
	)
}
export default PfpModal


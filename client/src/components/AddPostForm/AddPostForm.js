import './AddPostForm.scss'
import { BiImageAdd } from 'react-icons/bi'
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa'


const AddPostForm = (props) =>{

	return(
		<section className='add'>
			<form onSubmit={props.handleUpload} className='add__container'>
				<div className='add__header'>
					<FaArrowLeft onClick={props.handleGoback}className='add__goback'/>
					<h1 className='add__h1'>Create a post</h1>
				</div>
				<article className='add__image'>
					<img src={props.previewImg} className='add__preview' / >
					<label htmlFor='uploadImg' className='add__label-img'>
						<BiImageAdd className='add__upload-icon'/>
					</label>
					<input onChange={props.handleChangeImg} type='file' id='uploadImg' className='add__upload' name='image'  /> {/* display None */}
				</article>
				<div className='add__info-container'>

					<label className='add__label'>Title</label>
					<input onChange={props.handleChange} className='add__input' name='title' />

					<label className='add__label'>Price</label>
					<input onChange={props.handleChange} className='add__input' name='price' />

					<label className='add__label'>Location</label>
					<input onChange={props.handleChange} className='add__input' name='location' />

					<label className='add__label'>Category</label>
					<select id='category' className='add__input add__input--select'  name='category' >
						<option value="electronics">Electronics</option>
						<option value="clothing">Clothing</option>
						<option value="general">General</option>
						<option value="gardening">Gardening</option>
					</select>
					<label className='add__label'>Description</label>
					<input onChange={props.handleChange} className='add__input' name='description' />

					<label className='add__label'>Would You like your post on the hero banner? (10pts)</label>
					<div className='add__checkbox-container'>
						<input onChange={props.handleChange} type='checkbox' disabled={props.currentUser.points>10?false:true} className='add__input add__input--checkbox' value={true}  name='premium' />
						<label className='add__label'>Sure!</label>
					</div>

					
				</div>
				<button className='add__btn'>
					<FaArrowRight className='add__btn-icon' />
					<p className='add__btn-text'>Submit</p>
				</button>
				
				
			</form>
		</section>
	)
}
export default AddPostForm

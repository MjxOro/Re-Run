import './AddPostForm.scss'
import { BiImageAdd } from 'react-icons/bi'


const AddPostForm = (props) =>{

	return(
		<section className='add'>
			<form className='add__container'>
				<article className='add_image'>
					<label htmlFor='uploadImg' className='add__label-img'>
						<BiImageAdd className='add__upload-icon'/>
					</label>
					<input type='file' id='uploadImg' className='add__upload' name='image' onChange={props.handleUpload} /> {/* display None */}
				</article>
				<div className='add__info-container'>

					<label className='add__label'>Title</label>
					<input className='add__input' name='title' />

					<label className='add__label'>Price</label>
					<input className='add__input' name='price' />

					<label className='add__label'>Category</label>
					<input type='select' className='add__input'  name='category' />

					<label className='add__label'>Description</label>
					<input className='add__input' name='title' />
					
				</div>
				
				
			</form>
		</section>
	)
}
export default AddPostForm

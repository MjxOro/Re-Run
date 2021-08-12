import './Sidebar.scss'
import { ReactComponent as CloseButton } from '../../assets/chevron_right-24px.svg'

const Sidebar = (props) => {
	return(
		<>
		{ props.blnClose ? <section className='sidebar' >
				<nav className='sidebar__nav'>
					<div className='sidebar__close-container'>
						<h2 className='sidebar__greeting'>Hello! {'USERNAME'}</h2>
						<CloseButton onClick={props.close} className='sidebar__close-icon'/>
					</div>
					<div className='sidebar__link-container'>
						<a className='sidebar__link'>Home</a>
						<a className='sidebar__link'>Category</a>
						<a className='sidebar__link'>About</a>
						<a className='sidebar__link'>Settings</a>
					</div>
				</nav>
		</section>
			:
			<section className='sidebar sidebar--closed' >
				<nav className='sidebar__nav sidebar__nav--closed'>
					<div className='sidebar__close-container'>
						<h2 className='sidebar__greeting'>Hello! {'USERNAME'}</h2>
						<CloseButton onClick={props.close} className='sidebar__close-icon'/>
					</div>
					<div className='sidebar__link-container'>
						<a className='sidebar__link'>Home</a>
						<a className='sidebar__link'>Category</a>
						<a className='sidebar__link'>About</a>
						<a className='sidebar__link'>Settings</a>
					</div>
				</nav>
		</section>
		}
		</>
	)
}
export default Sidebar

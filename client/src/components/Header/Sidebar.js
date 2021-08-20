import './Sidebar.scss'
import { ReactComponent as CloseButton } from '../../assets/chevron_right-24px.svg'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
	return(
		<>
		{ props.blnClose ? <section className='sidebar' >
				<nav className='sidebar__nav'>
					<div className='sidebar__close-container'>
						<h2 className='sidebar__greeting'>Hello! {props.currentUser.username}</h2>
						<CloseButton onClick={props.close} className='sidebar__close-icon'/>
					</div>
					<div className='sidebar__link-container'>
						<Link className='sidebar__link'>Home</Link>
						<Link className='sidebar__link'>Category</Link>
						<Link className='sidebar__link'>About</Link>
						<Link className='sidebar__link'>Profile</Link>
						<Link className='sidebar__link'>Edit posts</Link>
						<Link className='sidebar__link'>Delete posts</Link>
						<Link to='/login' onClick={props.handleLogout} className='sidebar__link'>
							<FiLogOut className='sidebar__logout'/>
							<p className='sidebar__logout-text'>Logout</p>
						</Link>
					</div>
				</nav>
		</section>
			:
			<section className='sidebar sidebar--closed' hidden>
				<nav className='sidebar__nav sidebar__nav--closed'>
					<div className='sidebar__close-container'>
						<h2 className='sidebar__greeting'>Hello! {'USERNAME'}</h2>
						<CloseButton onClick={props.close} className='sidebar__close-icon'/>
					</div>
					<div className='sidebar__link-container'>
						<Link className='sidebar__link'>Home</Link>
						<Link className='sidebar__link'>Category</Link>
						<Link className='sidebar__link'>About</Link>
						<Link className='sidebar__link'>Profile</Link>
						<Link className='sidebar__link'>Edit posts</Link>
						<Link className='sidebar__link'>Delete posts</Link>
						<Link to='/login' onClick={props.handleLogout} className='sidebar__link'>
							<FiLogOut className='sidebar__logout'/>
							<p className='sidebar__logout-text'>Logout</p>
						</Link>
					</div>
				</nav>
		</section>
		}
		</>
	)
}
export default Sidebar

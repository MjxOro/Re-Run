import Sidebar from './Sidebar'
import './Header.scss'

const Header = (props) =>{
	let showSidebar = false; //Delete when props are done
	return(
		<header className='hd'>
			<div className='hd__container'>
				<figure className='hd__logo' />
				<nav className='hd__left-container'>
					<figure  className='hd__profile' />
					<figure className='hd__button-container'>
						
					</figure>
				</nav>
			</div>
			{showSidebar && <Sidebar />}
		</header>
	)
}

export default Header;

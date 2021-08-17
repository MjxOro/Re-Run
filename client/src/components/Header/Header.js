import react from 'react'
import Sidebar from './Sidebar'
import './Header.scss'
import { Link } from 'react-router-dom'


class Header extends react.Component {
	state = {
		showSidebar: false
	} 
	componentDidMount = () => {
		//Axios call if theres an account thats logged in.
		//That will change the profile picture and status on header 
		//If an account is logged in

	}
	handleSidebar = () =>{
		//Animations for desktop
		!this.state.showSidebar ?
			this.setState({showSidebar: true})
			:
			this.setState({showSidebar: false})
				
	}

	render = () => {
		return(
			<header className='hd'>
				<div className='hd__container'>
					<a className='hd__logo' />
					<nav className='hd__left-container'>
						<nav className='hd__desktop-nav'>
							<Link to='/' className='hd__link'>Home</Link>
							<Link to='/' className='hd__link'>Home</Link>
							<Link to='/' className='hd__link'>Home</Link>
							<Link to='/' className='hd__link'>Home</Link>
						</nav>
						<div className='hd__profile-tab'>
							<figure className='hd__profile' />
				{!this.state.showSidebar ? <div onClick={this.handleSidebar} className='hd__btn-container'>
								<div className='hd__burger' />
						</div>
				:
						<div onClick={this.handleSidebar} className='hd__btn-container hd__btn-container--open'>
							<div className='hd__burger hd__burger--open' />
						</div>

			}
					</div>
					</nav>
			</div>
				<Sidebar close={this.handleSidebar} blnClose={this.state.showSidebar} />
			</header>
		)
	}
}

export default Header;

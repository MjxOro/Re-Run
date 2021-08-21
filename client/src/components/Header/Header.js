import react from 'react'
import Sidebar from './Sidebar'
import './Header.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CgAddR } from 'react-icons/cg'
import { motion } from 'framer-motion'

class Header extends react.Component {
	state = {
		showSidebar: false,
	} 
	componentDidMount = () => {

	}
	handleSidebar = () =>{
		//Animations for desktop
		!this.state.showSidebar ?
			this.setState({showSidebar: true})
			:
			this.setState({showSidebar: false})
				
	}
	handleLogout = () => {
		this.props.history.push("/login")
		setTimeout(()=>{
			sessionStorage.removeItem("token")
		},2300)

  }

 transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}

	render = () => {
		return(
			 this.props.currentUser && (
			<header className='hd'>
				<div className='hd__container'>
					<Link to='/' className='hd__logo' />
					<nav className='hd__left-container'>
						<nav className='hd__desktop-nav'>
							<Link to='/' className='hd__link'>Home</Link>
							<Link to='/mypostings' className='hd__link'>My Postings</Link>
							<Link to='/' className='hd__link'>Points</Link>
						</nav>
						<Link to='/add/posts'>
						<motion.div
						whileHover={{scale:1.3}}
						transition={this.transition}
						>
						<CgAddR className='hd__add' />
						</motion.div>
						</Link>
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
				<Sidebar handleLogout={this.handleLogout} currentUser={this.props.currentUser} close={this.handleSidebar} blnClose={this.state.showSidebar} />
			</header>
			)
			
		)
	}
}

export default Header;

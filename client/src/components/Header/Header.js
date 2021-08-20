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
		currentUser: null
	} 
	componentDidMount = () => {
		const token = sessionStorage.getItem("token")
		axios.get(process.env.REACT_APP_API_URL+'/users/current', {
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
		.then(res =>{
			console.log(res)
			this.setState({currentUser: res.data.currentUser})
		})
		.catch(err =>{
			console.log(err)
		})



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
	handleLogout = () => {
		this.props.history.push("/login")
		setTimeout(()=>{
			sessionStorage.removeItem("token")
		},2300)

  }

 transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}

	render = () => {
		return(
		this.state.currentUser &&
			<header className='hd'>
				<div className='hd__container'>
					<Link to='/' className='hd__logo' />
					<nav className='hd__left-container'>
						<nav className='hd__desktop-nav'>
							<Link to='/' className='hd__link'>Home</Link>
							<Link to='/' className='hd__link'>Edit posts</Link>
							<Link to='/' className='hd__link'>Delete posts</Link>
							<Link to='/' className='hd__link'>Points</Link>
						</nav>
						<Link to='/login'>
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
				<Sidebar handleLogout={this.handleLogout} currentUser={this.state.currentUser} close={this.handleSidebar} blnClose={this.state.showSidebar} />
			</header>
		)
	}
}

export default Header;

import react from 'react'
import Sidebar from './Sidebar'
import './Header.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CgAddR } from 'react-icons/cg'
import { motion } from 'framer-motion'
import PfpModal from '../PfpModal/PfpModal'

class Header extends react.Component {
	state = {
		showSidebar: false,
		previewImg: null,
		files: null,
	} 
	componentDidMount = () => {


	}
	handleUpload = (e) =>{
		e.preventDefault()
		const token = sessionStorage.getItem("token")
		const formData = new FormData()
		formData.append("image",!this.state.files ? 'null' : this.state.files)
		formData.append("title",!this.state.title ? 'null' : this.state.title)
		formData.append("price",!this.state.price ? 'null' : this.state.price)
		formData.append("location",!this.state.location ? 'null' : this.state.location)
		formData.append("category",!this.state.category ? 'null' : this.state.category)
		formData.append("description",!this.state.description ? 'null' : this.state.description)
		formData.append("premium",!this.state.premium ? 'null' : this.state.premium)

		axios.put(process.env.REACT_APP_API_URL + '/secure/edit/post/' + this.props.match.params.id, formData,{
			headers: {
				authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			}
		})
		.then(res =>{console.log(res)})
		.catch(err =>{console.log(err)})

		this.props.history.push('/')
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
	handleChangeImg = (e) =>{
		console.log(e.target.files)
		this.setState({
			files: e.target.files[0],
			previewImg: URL.createObjectURL(e.target.files[0])
		})
	}
	handleUpload = (e) =>{
		e.preventDefault()
		const token = sessionStorage.getItem("token")
		const formData = new FormData()
		formData.append("image",!this.state.files ? 'null' : this.state.files)

		axios.put(process.env.REACT_APP_API_URL + '/secure/upload/pfp/', formData,{
			headers: {
				authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			}
		})
		.then(res =>{
			console.log(res)
			this.setState({showModal: false})

			this.props.history.go(0)
		})
		.catch(err =>{console.log(err)})
	}
	handleModalShow = () =>{
		this.setState({showModal: true})
	}
	handleModalClose = () =>{
		this.setState({showModal: false})
	}

 transition = { duration: 0.6, ease:[0.43,0.13,0.23,0.96]}
	render = () => {
		return(
			<>
			<PfpModal show={this.state.showModal} close={this.handleModalClose} handleUpload={this.handleUpload} previewImg={this.state.previewImg} handleChangeImg={this.handleChangeImg} 
/>
			{this.props.currentUser && (
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
							<img src={this.props.currentUser.profilePicture} className='hd__profile' onClick={this.handleModalShow}/>
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
			)}
			</>
			
		)
	}
}

export default Header;

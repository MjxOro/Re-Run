import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage/LandingPage'
import SignUp from './pages/SignUp/SignUp'
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import PostPage from './pages/PostPage/PostPage'
import AddPost from './pages/AddPost/AddPost';
function App() {
  return (
		<BrowserRouter>
			<Route
				render={({location}) =>(
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname} >
							<ProtectedRoute path='/add/posts' component={AddPost}/>
							<ProtectedRoute path='/post/:id' component={PostPage}/>
							<Route path='/login' component={LoginPage}/>
							<Route path='/register' component={SignUp} />
							<Route path='/welcome' component={LandingPage} />
							<ProtectedRoute path='/' component={MainPage}/>
						</Switch>
					</AnimatePresence>
				)}
			/>
    </BrowserRouter>
  );
}
export default App

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import { AnimatePresence } from 'framer-motion'
import PostPage from './pages/PostPage/PostPage';

function App() {
  return (
		<BrowserRouter>
			<Route
				render={({location}) =>(
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname} >
							<Route path='/post/:id' component={PostPage}/>
							<Route path='/home' component={MainPage}/>
							<Route path='/login' component={LoginPage}/>
							<Route path='/register' component={SignUp} />
							<Route path='/' component={LandingPage} />
						</Switch>
					</AnimatePresence>
				)}
			/>
    </BrowserRouter>
  );
}

export default App;

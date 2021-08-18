import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path='/home' component={MainPage}/>
				<Route path='/login' component={LoginPage}/>
				<Route path='/register' component={SignUp} />
				<Route path='/' component={LandingPage} />
			</Switch>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path='/register' component={SignUp} />
				<Route path='/' component={LandingPage} />
			</Switch>
    </BrowserRouter>
  );
}

export default App;

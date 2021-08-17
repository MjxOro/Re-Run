import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={LandingPage} />
			</Switch>
    </BrowserRouter>
  );
}

export default App;

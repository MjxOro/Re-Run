import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
		<BrowserRouter>
			<Header />
    </BrowserRouter>
  );
}

export default App;

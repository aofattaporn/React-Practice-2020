import logo from './logo.svg';
import './App.css';
import './Hello'

// pagges 
import Home from './pages/Home/HomePage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Nav
import Nav from './component/Nav';
import { Route } from 'react-router-dom';


function APP(){

  return (
    <div> 
      <Nav/>
      <div className='containe'>
        <Route exact={true} path="/" component={Home}></Route>     
        <Route exact path="/about" component={About}></Route>    
        <Route exact path="/contact" component={Contact}></Route>
      </div>
    </div>
  )
}

export default APP;

import './App.css';
import './Hello'

// pagges 
import Home from './pages/Home/HomePage';
import Abount from './pages/About/AbountPage';
import Contact from './pages/Contact/Contact';


// Nav
import Nav from './component/Nav';

import {Route, Routes} from 'react-router-dom';


function APP(){

  return (
    <div className='App'> 
      <Nav/>
      <div className='containe'>
        <Routes>
          <Route exact={true} path="/" element={<Home/>} />
          <Route exact path="/about" element={<Abount/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  )
}

export default APP;

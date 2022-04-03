import './App.css';

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

      <div className='containe'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Abount/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  )
}

// style component 


export default APP;

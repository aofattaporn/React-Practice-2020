import { Route, Router, Routers } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

// pagges 
import HomePage from './pages/Home/HomePage';




function APP(){

  return (
    <div className='App'> 
      <Navigation/>
      <Routers>
        <Route path='/' element={HomePage}> HomePage </Route>

      </Routers>
    </div>
  )
}

// style component 


export default APP;

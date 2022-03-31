import { NavLink } from "react-router-dom";
import { styled } from 'styled-components';




const Nav =()=>{
   return (
      <div> 
         <ul>
            <NavLink exact activeClassName="active" to="/" >
               <li>Home</li>
            </NavLink>
            
            <NavLink activeClassName="active" to="/about">
               <li>About</li>
            </NavLink>

            <NavLink activeClassName="active" to="/contact">
               <li>Contact</li>
            </NavLink>
         </ul>
      </div>
   )
}

export default Nav; 
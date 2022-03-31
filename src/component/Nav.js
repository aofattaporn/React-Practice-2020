import { NavLink } from "react-router-dom";


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
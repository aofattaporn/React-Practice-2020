import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faBars} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


const Nav =()=>{

   const [isExpended, setIsExpended] = useState(false);
   

   return (

      <Navigation> 
         <div>
            <Link className="link__logo" to='/'><li>Xtra</li></Link>
         </div>

         {/* link-left */}
         
         <nav className="link">
            
            <FontAwesomeIcon 
               className="bars" 
               icon={faBars}
               onClick = {() => {setIsExpended(!isExpended)}}>
            </FontAwesomeIcon>

            {/* <ul className={`link__pages`}> */}
            <ul className={`link__pages ${isExpended ? "is-expanded" : ""} }`}>

                  <NavLink to={'/'}> <li>HOME</li> </NavLink>
                  <NavLink to={'/movies'}> <li>MOVIES</li> </NavLink>
                  <NavLink to={'/cinemas'}> <li>CINEMAS</li> </NavLink>
                  <NavLink to={'/promotions'}> <li>PROMOTIONS</li> </NavLink>
            </ul>
         </nav>

         {/* link-right */}
         <nav>
               <ul className={`account ${isExpended ? "is-expanded" : ""} }`}>
                  <li className="account__search">
                     <form>
                        <input type={'text'} placeholder="search movie / movie genre "></input>
                        <button>search</button>
                     </form>
                  </li>    
                  <NavLink className={"account__login"} to={'/'}> <li>LogIn</li> </NavLink>
                  <li className={"account__symbol"} >/</li>
                  <NavLink className={"account__logout"} to={'/'}> <li>LogOut</li> </NavLink>
                  <li className={"account__icon"}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></li>
               </ul>
         </nav>
       
      </Navigation>
   )
}

// style component 
const Navigation = styled.header`
   
   height: 100px;
   z-index: 1;
   display: flex;
   font-size: 16px;
   flex-direction: row;
   justify-content: space-between;
   padding: 1rem 1.7rem;

   .link__logo{
      font-size: 36px;
      font-weight: bold;
   }

   .link__pages{
      display: flex;
      flex-direction: row;
      grid-gap: 2rem;
   } 

   .account {
      display: flex;
      flex-direction: row; 
      grid-gap: 1rem;
   }

   ${props => props.color}

   li{
      color: ${props => props.color ? "white" : "palevioletred"};
      list-style-type: none;
      text-decoration: none;
   }

   input{
      border: none;
      background-color: transparent;
      width: 300px;
      margin-right: 5px;
      border: none;
      border-bottom: 2px solid ${props => props.color ? "white" : "palevioletred"};
   }

   .bars{
      display: none;
   }


   @media screen and (max-width: 787px){
      height: auto;
      min-height: 100px;
      justify-content: center;
      flex-direction: column;
      padding-top: 2rem;

      // icons 
      .bars{
         display: inline-block;
         position: absolute;
         cursor: pointer;
         color: white;
         font-size: 20px;
         right: 20px;
         top: 20px;
      }

      // element nav 
      .link{
         flex-direction: column;
         align-items: center;
      }

      ul.link__pages{
         margin-top: 2rem;
         display: none;
         width: 100vw;

         li{
            border-top: 1px solid white;
         }

         &.is-expanded{
            display: inline-block;
         }
      }




   }




`;



export default Nav; 
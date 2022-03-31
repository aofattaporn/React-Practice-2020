import { useState } from "react";

const Button =(props) =>{

   // check function return

   let frage = 0;

   if(props.title == "ADD"){
      frage =  1;
   }
   else{
      frage =  -1;
   }



   return (

      <div>
         <button onClick={()=>{props.setCountNumber(frage)}}>{props.title} </button>
      </div>
   )
}

export default Button; 
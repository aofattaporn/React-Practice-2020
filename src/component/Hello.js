
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

function Hello({name}){ 
return (
   <Fragment>
      <h1> Hello world {name}</h1>
      <FontAwesomeIcon icon={faCoffee} />
   </Fragment>
   )
}

export default Hello;
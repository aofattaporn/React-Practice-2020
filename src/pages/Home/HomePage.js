
import styled from 'styled-components';
import Nav from "../../component/Nav";



const HomePage = () =>(
   <Board > 
      <Nav/>
      <h1>Hello world</h1>
   </Board>

);

const Board = styled.div`

   height: 38rem;
   width: 100%;
   background-color: #17130A;

`;

export default HomePage;
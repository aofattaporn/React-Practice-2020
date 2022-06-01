
import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link, Route, Router } from "react-router-dom";


const Navigation = ()=>{
   return(
   <Navbar bg="dark" variant="dark" expand="lg" >
      <Container  variant="light" fluid>
         <Navbar.Brand variant="success" style={{fontSize: "2rem"}}> 
             <Link to={"/"}>Xtra</Link>
         </Navbar.Brand>
         <Navbar.Toggle variant="success" aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
            
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: "1rem" }}
            navbarScroll
            >
            <Nav.Link><Route exact path="/" c>Home</Route></Nav.Link>
            <Nav.Link href="#action2">Movie</Nav.Link>
            <Nav.Link  href="#action2">Cinema</Nav.Link>
            <Nav.Link  href="#action2">Promotion</Nav.Link>
            
            </Nav>

         </Navbar.Collapse>
      </Container>
   </Navbar>
   )
}

export default Navigation;
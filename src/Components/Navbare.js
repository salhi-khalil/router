import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navbare({login,setlogin}) {


const  toggle =()=> setlogin(!login);

    return (
        <div>
   

         {login ? <><Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Workshop react-router</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
           <Nav.Link as = {Link} to ='/'   >Home</Nav.Link>
    {/* <Link to ='/'> <li>Home</li> </Link             */ }    
        <Nav.Link as={Link} to ='/contact' >Contact</Nav.Link>
        <Nav.Link  onClick= {toggle}>Logout</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> </> : 
           <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Workshop react-router</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
           <Nav.Link as = {Link} to ='/'   >Home</Nav.Link>
    {/* <Link to ='/'> <li>Home</li> </Link             */ }    
       
        <Nav.Link  onClick= {toggle}>Login</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  }


        </div>
    )
}

export default Navbare

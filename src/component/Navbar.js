import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header({name}) {
    return ( 
        <div className='mb-3'>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link ><Link to='/' style={{textDecoration:'none', color:'black'}}>Home</Link></Nav.Link>
                <Nav.Link ><Link to='/usereducer' style={{textDecoration:'none', color:'black'}}>Reducer</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
     );
}

export default Header;
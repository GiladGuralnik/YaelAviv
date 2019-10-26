import React from 'react';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar>
    <Navbar.Brand href="home">
      {/* <imgls
        alt=""
        src="/logo.png"
        width="50"
        height="50"
        className="d-inline-block"
        /> */}
        {/* {' YAEL AVIV LASRY'} */}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="mr-auto ">
            <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Wood</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Concrete</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drawing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link style={{paddingLeft: '25px'}} href="about">About</Nav.Link>
            <Nav.Link style={{paddingLeft: '25px'}} href="contact">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  )


  
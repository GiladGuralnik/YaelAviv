import React from 'react';
import { Nav, Navbar,NavDropdown, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;


export const NavigationBar = () => (
    <Styles>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
      {' YAEL AVIV '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <NavDropdown title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Wood</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Concrete</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Drawing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    </Styles >
  )


  
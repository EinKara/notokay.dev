import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { 
    Route, 
    Link,
    BrowserRouter, 
    Routes
  } from "react-router-dom";

// CSS 
import './css/border.css'
import './css/dark-theme.css'

export default class NavbarComp extends Component {
    render() {
        return (
            <div className='rotating-border rotating-border--google'>
                <Navbar bg="dark" variant="dark" expand="lg" className="Navbar">
                    <Navbar.Brand href="#home">NKDEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>          
            </div>
        )
    }
}
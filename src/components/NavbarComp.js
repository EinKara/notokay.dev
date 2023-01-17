import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { 
    Route, 
    Link,
    BrowserRouter, 
    Routes
  } from "react-router-dom";

// CSS 
import './css/Navbar.css'

export default class NavbarComp extends Component {
    render() {
        return (
            <div className='navbar navbar-border'>
                <Navbar bg="light" variant="light" expand="lg" className="Navbar">
                    <Navbar.Brand className="brandButton" as={Link} to="/">NKDEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link className="navButton" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="navButton" as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link className="navButton" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className="navButton" as={Link} to="/donate">Donate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>          
            </div>
        )
    }
}
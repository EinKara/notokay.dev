import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">NKDEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#donate">Donate</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
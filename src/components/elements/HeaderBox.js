import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HeaderBox.css'

export default class PostBox extends Component {
    render() {
        return (
            <Container fluid className="Header">
                <Container fluid className="HeaderTextBox">
                    <h1>{this.props.title}</h1>
                    <h5>{this.props.subtitle}</h5>
                </Container>
            </Container>
        );
    }
}
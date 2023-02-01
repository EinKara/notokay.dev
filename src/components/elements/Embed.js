import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Embed.css'

export default class Embed extends Component {
    render() {
        return (
            <Container className='Embed' fluid>
                <iframe className='Embed' src={this.props.src} title="Test" allowFullScreen></iframe>
            </Container>
        );
    }
}
import React, { Component } from 'react'

import Link from 'react-router-dom'

import './PostBox.css'

import { Navigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function nav(url) {
    return <Navigate to={url} /> 
}

export default class PostBox extends Component {

    render() {
        let bgi = "background-image: "
        let st = bgi.concat("url('", this.props.imgsrc, "')")

        console.log(st);

        return (
            <Container fluid className='postcontainer' style={{st}} onClick={() => {
                window.location.href = this.props.url;
            }}>
                <Row className="textboxe">
                        <Row className='postcontainer-title'>
                            <h3>{this.props.title}</h3>
                        </Row>
                        <Row className='postcontainer-body'>
                            {this.props.children}
                        </Row>
                </Row>
            </Container>
        );
    }
}
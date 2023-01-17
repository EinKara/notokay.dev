import React, { Component } from "react";

import {
    Link
}
from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import './css/site-extensions.css'

// Elements
import PostBox from "./elements/PostBox";

import HeaderBox from "./elements/HeaderBox";


export default class Home extends Component {
    render() {
        return (
            <div className="Page">
                <HeaderBox title="Test Page" subtitle="" />

                <Container fluid>
                <div className="Body">
                    <Row>
                    
                    </Row>
                </div>
                </Container>
            </div>
        )
    }
}
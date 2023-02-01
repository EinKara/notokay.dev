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

import Embed from "./elements/Embed"

export default class Projects extends Component {
    render() {
        return (
            <div className="Page">
                <HeaderBox title="Projects" subtitle=">:(" />

                <Container fluid>
                <div className="Body">
                    <Row>
                    <Col className="posts">
                        <Embed src="https://github.com/EinKara/notokay.dev" />
                        <PostBox
                        title='NKDEV'
                        imgsrc='test-post.png'
                        url="#">notokay.dev website. These buttons are supposed to bring you to a new page, however I have not finished that part.</PostBox>
                    </Col>
                    </Row>
                </div>
                </Container>
            </div>
        );
    }
}
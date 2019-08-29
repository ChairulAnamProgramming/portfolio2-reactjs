import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-footer ">
            <Container className="py-5">
                <Row>
                    <Col sm="6">
                        <Row>
                            <Col><h3 className="text-white font-weight-bold mx-4">ABOUT MYSELF</h3></Col>
                        </Row>
                        <Row>
                            <Col><p className="text-secondary mt-2 mx-4">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p></Col>
                        </Row>
                        <Row>
                            <Col><p className="text-secondary mt-3 mx-4">Copyright ©2019 All rights reserved | This template is made with by TimCode</p></Col>
                        </Row>
                    </Col>
                    <Col sm="6">
                        <Row>
                            <Col><h3 className="text-white font-weight-bold mt-sm-0 mx-4 mt-5">FOLLOW ME</h3></Col>
                        </Row>
                        <Row>
                            <Col sm="1" xs="2"><p className="text-secondary mt-2 mx-4"><FontAwesomeIcon icon={faFacebook} size="2x" /></p></Col>
                            <Col sm="1" xs="2"><p className="text-secondary mt-2 mx-4"><FontAwesomeIcon icon={faGithub} size="2x" /></p></Col>
                            <Col sm="1" xs="2"><p className="text-secondary mt-2 mx-4"><FontAwesomeIcon icon={faTwitter} size="2x" /></p></Col>
                        </Row>
                        <Row>
                            <Col><p className="text-secondary mt-3 mx-4">Let us be social</p></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
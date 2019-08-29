import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Button, Input } from 'reactstrap';
import { } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import JumboContact from './jumboContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/footer';
import { Parallax } from 'react-scroll-parallax';


class Contact extends Component {

    render() {
        return (
            <div>
                <Parallax className="custom-class" y={[50, -10]} tagOuter="figure">
                    <JumboContact />
                </Parallax>
                <Container className="my-5 pt-5">
                    <Row>
                        <Col sm="4">
                            <Row className="align-items-start">
                                <Col xs="1" sm="1" className="mt-1"><FontAwesomeIcon icon={faHome} /></Col>
                                <Col xs="10" sm="10">
                                    <h4> Kota Kandangan</h4>
                                    <p className="text-secondary"> Kalimantan Selatan Kab.Hulu Sungai Selatan</p>
                                </Col>
                            </Row>
                            <Row className="align-items-start">
                                <Col xs="1" sm="1" className="mt-1"><FontAwesomeIcon icon={faPhone} /></Col>
                                <Col xs="10" sm="10">
                                    <h4> 0822 1738 0171</h4>
                                    <p className="text-secondary"> 09:00 PM- 10:00 AM</p>
                                </Col>
                            </Row>
                            <Row className="align-items-start mb-5 mb-sm-0">
                                <Col xs="1" sm="1" className="mt-1"><FontAwesomeIcon icon={faEnvelope} /></Col>
                                <Col xs="10" sm="10">
                                    <h4> chairulanamart16@gmail.com</h4>
                                    <p className="text-secondary">Send us your query anytime!</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <FormGroup>
                                <Input type="text" name="name" className="input-contact" id="name" placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" className="input-contact" id="email" placeholder="Enter Email Address" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="subject" className="input-contact" id="subject" placeholder="Enter Subject" />
                            </FormGroup>

                        </Col>
                        <Col sm="4">
                            <FormGroup>
                                <Input type="textarea" name="message" rows="6" className="input-contact textarea" id="message" placeholder="Enter Message" />
                            </FormGroup>
                            <Button className="button-send" >Sand Message</Button>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;
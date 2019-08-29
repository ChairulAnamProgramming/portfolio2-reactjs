import React from 'react';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import './home.css';

import avatar from '../../../assets/images/avatar/man1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMobile, faEnvelope, faMapMarked, faTable } from '@fortawesome/free-solid-svg-icons';

// IconImage
import facebook from '../../../assets/icon/fb.png';
import github from '../../../assets/icon/github.png';
import twitter from '../../../assets/icon/tw.png';


const Jumbo = () => {
    return (

        <Row className=" align-items-center">
            <Col sm="6"><img src={avatar} className="img-fluid" /></Col>
            <Col sm="6" >
                <Row>
                    <Col><p className="spacing-100 text-center text-sm-left mt-5 mt-sm-0 mb-0 ">HELLO EVERYBODY, I AM</p></Col>
                </Row>
                <Row>
                    <Col><h1 className="text-sm-left mx-4 mx-sm-0 font-weight-bold">CHAIRUL ANAM</h1></Col>
                </Row>
                <Row>
                    <Col><p className=" text-sm-left mx-4 mx-sm-0  mb-0 ">FULL STACK UI/UX DEVELOPER & DESIGNER</p></Col>
                </Row>
                <Row>
                    <Col><p className=" text-sm-left mx-4 mx-sm-0 mt-4 mb-4 text-secondary">You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p></Col>
                </Row>
                <Row>
                    <Col xs="1" sm="1"><p className="mx-4 mx-sm-0 text-center text-secondary"><FontAwesomeIcon icon={faCalendar} /></p></Col>
                    <Col><p className="text-left mx-3 mx-sm-0 text-secondary">16st Juny,1997</p></Col>
                </Row>
                <Row>
                    <Col xs="1" sm="1"><p className="mx-4 mx-sm-0 text-center text-secondary"><FontAwesomeIcon icon={faMobile} /></p></Col>
                    <Col><p className="text-left mx-3 mx-sm-0  text-secondary">+62 822 1738 0171</p></Col>
                </Row>
                <Row>
                    <Col xs="1" sm="1"><p className="mx-4 mx-sm-0 text-center text-secondary"><FontAwesomeIcon icon={faEnvelope} /></p></Col>
                    <Col><p className="text-left mx-3 mx-sm-0  text-secondary">chairulanamart16@gmail.com</p></Col>
                </Row>
                <Row>
                    <Col xs="1" sm="1"><p className="mx-4 mx-sm-0 text-center text-secondary"><FontAwesomeIcon icon={faMapMarked} /></p></Col>
                    <Col><p className="text-left mx-3 mx-sm-0 text-secondary">Desa Tambak Bitin Kec.Daha Utara Kab.Hulu Sungai Selatan</p></Col>
                </Row>
                <Row className="justify-content-center justify-content-sm-start mt-5">
                    <Col xs="4" sm="2"><a rel="stylesheet" href="https://www.facebook.com/geminy.a.oke" target="blank"><img src={facebook} alt="Facebool" className="img-fluid" /></a></Col>
                    <Col xs="4" sm="2"><a rel="stylesheet" href="https://twitter.com/chairulanamart" target="blank"><img src={twitter} alt="Twitter" className="img-fluid" /></a></Col>
                    <Col xs="4" sm="2"><a rel="stylesheet" href="https://github.com/ChairulAnamProgramming" target="blank" ><img src={github} alt="Github" className="img-fluid" ss /></a></Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Jumbo;
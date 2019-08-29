import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';

import './home.css';
import Jumbo from './jumboHome';
import Progres from './progress';
import Footer from './footer';




class Home extends Component {




    render() {
        return (
            <div>
                <Container>
                    <Parallax className="custom-class" y={[50, -40]} tagOuter="figure">
                        <Jumbotron fluid className="bg-white shadow-lg mt-5 rounded-home p-2 p-sm-4">
                            <Jumbo />
                        </Jumbotron>
                    </Parallax>
                </Container>
                <Progres />
                <Footer />


            </div>
        );
    }
}

export default Home;
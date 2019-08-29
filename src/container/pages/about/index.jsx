import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { } from '@fortawesome/free-brands-svg-icons';
import './about.css';
import JumboAbout from './jumboAbout';
import Jumbo from '../home/jumboHome';
import Footer from '../home/footer';
import Progres from '../home/progress';
import { Parallax } from 'react-scroll-parallax';



class About extends Component {
    render() {
        return (
            <div>

                <Parallax className="custom-class" y={[100, -40]} tagOuter="figure">
                    <JumboAbout />
                </Parallax>
                <Container className="my-5 pt-5">
                    <Jumbo />
                </Container>
                <Progres data={this.state} />
                <Footer />
            </div>
        );
    }
}

export default About;
import React, { Component } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import { connect } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faBook } from '@fortawesome/free-solid-svg-icons';

import './home.css';



class Progres extends Component {
    render() {

        return (
            <Container>
                <Row className="px-2 px-sm-5 mb-5">
                    <Col sm="6">
                        <Row>
                            <Col><h2>ABOUT MYSELFT</h2></Col>
                        </Row>
                        <Row>
                            <Col className="mr-5"><p className="text-secondary">inappropriate behavior is often laughed off as “boys will be boys,”women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed</p></Col>
                        </Row>
                        <Row>
                            <Col sm="4" xs="6" className="p-2 border m-2 rounded-lg ">
                                <FontAwesomeIcon icon={faCoins} size="3x" className="mt-2" />
                                <h1>$2.5</h1>
                                <p className="text-secondary">Total Donation</p>
                            </Col>
                            <Col sm="4" xs="6" className="p-2 border m-2 rounded-lg ">
                                <FontAwesomeIcon icon={faBook} size="3x" className="mt-2" />
                                <h1>20</h1>
                                <p className="text-secondary">Total Projects</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="6">
                        <Row>
                            <Col>
                                <div>
                                    <label>HTML {this.props.html}%</label>
                                    <Progress value={this.props.html} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>CSS {this.props.css}%</label>
                                    <Progress value={this.props.css} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>JS {this.props.js}%</label>
                                    <Progress value={this.props.js} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>PHP {this.props.php}%</label>
                                    <Progress value={this.props.php} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>FLUTTER {this.props.flutter}%</label>
                                    <Progress value={this.props.flutter} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>REACT {this.props.react}%</label>
                                    <Progress value={this.props.react} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <div>
                                    <label>JAVA {this.props.html}%</label>
                                    <Progress value={this.props.java} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        html: state.globalHtml,
        css: state.globalCss,
        js: state.globalJs,
        php: state.globalPhp,
        flutter: state.globalFlutter,
        react: state.globalReact,
        java: state.globalJava
    }
}

export default connect(mapStateToProps)(Progres);
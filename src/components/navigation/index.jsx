import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import './nav.css';


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            scrolled: false

        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 20;

            if (isTop !== true) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        });
    }
    render() {
        return (

            <div className={this.state.scrolled ? 'nav-fixed-scroll' : 'nav-fixed'}>
                <Container >
                    <Navbar light expand="md" >
                        <Link to="/" className="font-weight-bold text-white nav-logo"><h4>TIMCODE</h4></Link>
                        <div onClick={this.toggle} className="burger">
                            <div className="line-burger"></div>
                            <div className="line-burger"></div>
                            <div className="line-burger"></div>
                        </div>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <Link to="/" className="nav-link text-white">HOME</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link text-white">ABOUT</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link text-white">CONTACT</Link>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Navigation;
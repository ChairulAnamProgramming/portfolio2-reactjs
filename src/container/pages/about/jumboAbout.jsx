import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const JumboAbout = () => {
    return (
        <Jumbotron fluid className="bg-white shadow-lg mt-5 rounded-home py-5  text-center">
            <h1 className="font-weight-bold mt-5">About me</h1>
            <div className="mb-5">
                <Link to="/" className="nav-link text-dark d-inline">Home</Link>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link to="/about" className="nav-link text-dark d-inline">About me</Link>
            </div>
        </Jumbotron>
    );
}

export default JumboAbout;
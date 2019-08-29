import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const JumboContact = () => {
    return (
        <Jumbotron fluid className="bg-white shadow-lg mt-5 rounded-home py-5  text-center">
            <h1 className="font-weight-bold mt-5">Contact me</h1>
            <div className="mb-5">
                <Link to="/" className="nav-link text-dark d-inline">Home</Link>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link to="/contact" className="nav-link text-dark d-inline">Contact me</Link>
            </div>
        </Jumbotron>
    );
}

export default JumboContact;
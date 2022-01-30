import "./navbar.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <nav className="navbar">
          
            <div className="navbar-container">
            
            <Link to ="/" className="homepage">
                {props.title}
            </Link>

            <Link to ="/projects" className="projects">
                Projects
            </Link>

            <Link to ="/contact" className="contact">
                Contact
            </Link>
               
            </div>
        </nav>

    );
}

Navbar.defaultProps = {
    title: "Navbar",
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar;


import React from 'react';
import './home.scss'
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="Home">
        <div id="mobile-menu-open" className="shadow-large">
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <Header />
        <div id="lead">
        <div id="lead-content">
            <h1>Nilufaer Abulimiti</h1>
            <h2>Software Engineer</h2>
            <a href={require('../../cv.pdf')} className="btn-rounded-white" download='cv'>Download Resume</a>
        </div>
        <div id="lead-overlay"></div>

        <div id="lead-down">
            <span>
                {/* <i className="fa fa-chevron-down" aria-hidden="true"></i> */}
                <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </span>
        </div>
    </div>
    </div>
  );
}

export default Home;

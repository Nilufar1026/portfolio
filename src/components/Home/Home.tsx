import React from 'react';
import './home.scss'
import Header from '../Header/Header';

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
            <a href="#" className="btn-rounded-white">Download Resume</a>
        </div>
        <div id="lead-overlay"></div>

        <div id="lead-down">
            <span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
        </div>
    </div>
    </div>
  );
}

export default Home;

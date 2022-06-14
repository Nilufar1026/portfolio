import React from 'react';
import './project.scss';

const runtime =require('../../images/projectsImage/runtime.jpg')
const agripare =require('../../images/projectsImage/agripare.jpg')
const beer =require('../../images/projectsImage/beer.jpg')
const chat =require('../../images/projectsImage/chat.jpg')
const eWallet =require('../../images/projectsImage/e-wallet.jpg')
const ingaBraBygg =require('../../images/projectsImage/Inga-bra-bygg.jpg')
const starwars =require('../../images/projectsImage/starwars.jpg')

const Projects = () => {
  return (
    <div id="projects" className="background-alt">
       <h2 className="heading">Projects</h2>
        <div className="container">
            {/* <div className="project-box"> */}
                <div className="project shadow-large">
                    <div className="project-image">
                        <img src={runtime} />
                    </div>
                    <div className="project-info">
                        <h3>B3 Runtime</h3>
                        <p>
                        This project is an application for participating in various sport competitions which is a running/walking version of orienteering that includes questions at a number of checkpoints.
                        </p>
                    </div>
                </div>
                <div className="project shadow-large">
                    <div className="project-image">
                        <img src={agripare} />
                    </div>
                    <div className="project-info">
                        <h3>Agripare</h3>
                        <p>
                        A web application for farmers, they can check there product information of the market when they send the weekly invoice to the application.
                        </p>
                    </div>
                </div>
                <div className="project shadow-large">
                    <div className="project-image">
                        <img src={beer} />
                    </div>
                    <div className="project-info">
                        <h3>Beer project</h3>
                        <p>
                            A single page application build by vanila JavaScript.
                        </p>
                        <a href="https://github.com/Nilufar1026/beer-projekt">https://github.com/Nilufar1026/beer-projekt</a>
                    </div>
                </div>
                <div className="project shadow-large">
                    <div className="project-image">
                        <img src={ingaBraBygg} className="ingaBraBygg"/>
                    </div>
                    <div className="project-info">
                        <h3>Inga Bra bygg</h3>
                        <p>
                            A mobil application build by expo and react native.
                        </p>
                        <a href="https://github.com/Nilufar1026/slutprojekt-crossplatform">https://github.com/Nilufar1026/slutprojekt-crossplatform</a>
                    </div>
                </div>
            </div>
        </div>
    // </div>
  );
}

export default Projects;

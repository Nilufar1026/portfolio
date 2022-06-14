import React from 'react';
import './education.scss';

const Education = () => {
  return (
    <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
            <h3>IT-Högskolan Stockholm</h3>
            <span className="education-date">Aug 2020 - June 2022</span>
            <h4>JavaScript developer</h4>
            <p>
            Course including HTML CSS, Native JavaScript, Graphic design and UX design, JavaScript with framework (vue.js), Design principle (test), Agile development, Software life cycle management, Crossplatform development (React native, expo).
            </p>
        </div>
        <div className="education-block">
            <h3>Geneva Business School </h3>
            <span className="education-date">Sept 2015 - Dec 2017</span>
            <h4>International management</h4>
            <p>
             It is MBA program as international management.
            </p>
        </div>
    </div>
  );
}

export default Education;

import React from 'react';
import './experience.scss'
import ExperienceItem from '../ExperienceItem/ExperienceItem'

export interface IExperience {
    id:number,
    date: string,
    company: string,
    city: string,
    status: string,
    describe: string,
    method: string
}

const Experience = () => {
    const experience: IExperience[] = [
        {
            id:1,
            date: "2022.01 - 2022.05",
            company: "B3 INNOVATION",
            city: "STOCKHOLM",
            status: "Internship",
            describe: "It is an application where you can participate in various competitions that are running / walking version of orientation with questions and penalty rounds when you answer wrong.",
            method: "Frontend: React och Redux-toolkit, Style component, Firebase."
        }, {
            id:2,
            date: "2021.08 – 2021.10",
            company: "REDMIND AB",
            city: "STOCKHOLM",
            status: "Internship",
            describe: "A new web application for farmers, they can check there product information of the market when they send the weekly invoice to the application.",
            method: "Backend: parsar PDF, fixar email template i Mail Gun, spara data i firestore och api. Frontend: React och Redux."
        },
    ]
    return (
        <div className="background-alt" id="experience">
            <h2 className="heading">Experience</h2>
            <div className="experienceWrapper">
                <div className="experienceDate">
                    {experience.map((ex) =>
                        <li key={ex.id} className={`date-${ex.id}`}>{ex.date}</li>
                    )}
                </div>
                <div className='timeLine' />
                <div className="experienceContent">
                {experience.map((ex) =>
                <ExperienceItem experience={ex} key={ex.id}/>
                    // <li key={ex.id}>

                    //     {ex.company} | {ex.city} | {ex.status}
                    
                    // </li>
                )}
                    
                </div>

            </div>
            {/* <div id="experience-timeline"> */}
            {/* <div data-date="September 2015 – September 2016">
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
            </div> */}

            {/* <div data-date="September 2015 – September 2016">
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
            </div> */}

            {/* <div data-date="September 2015 – September 2016">
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
            </div> */}
            {/* </div> */}
        </div>
    );
}

export default Experience;
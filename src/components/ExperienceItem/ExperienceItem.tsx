import React from 'react';
import {IExperience} from '../Experience/Experience'

interface exProps {
    experience:  IExperience;
}
// export type exProps = [IExperience]

const ExperienceItem:React.FC<exProps> = ({experience}:exProps) => {
    return (
        <div className="experienceItem">
          {/* <ul> */}
          {/* {experience.map((ex) => */}
            <li className='experienceTitle'>{experience.company} | {experience.city} | {experience.status}</li>
            <li className='exDescribe'>{experience.describe}</li>
            <li className='exMethod'>{experience.method}</li>
          {/* )} */}
          {/* </ul> */}
        </div>
    );
}

export default ExperienceItem;
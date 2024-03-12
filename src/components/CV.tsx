import { CvHeader, HeaderInputs, HeaderHandler, Details as HeaderDetails } from './Header';
import { CvContact, ContactInputs, ContactHandler, Details as ContactDetails } from './Contact';
import { CvEducation, EducationInputs, EducationHandler, Details as EducationDetails } from './Education';
import { WorkInputs, CvWork, WorkHandler, Details as WorkDetails } from './Work';
import { ProjectInputs, CvProject, ProjectHandler, Details as ProjectDetails } from './Projects';
import {
    educationData
} from '../data/cvData';

import { v4 as uuid } from 'uuid';
import './../style/style.scss';

interface CvProps {
    handleHeader: HeaderHandler;
    handleContact: ContactHandler;
    handleEducation: EducationHandler;
    handleProject: ProjectHandler;
    handleWork: WorkHandler;
    headerDetails: HeaderDetails;
    contactDetails: ContactDetails;
    educationDetails: EducationDetails[];
    projectDetails: ProjectDetails[];
    workDetails: WorkDetails[];
}

export default function Cv({ 
        handleHeader,
        handleContact,
        handleEducation,
        handleProject, 
        handleWork,
        headerDetails,
        contactDetails,
        educationDetails,
        projectDetails,
        workDetails
    }: CvProps) {

    function addEducation() {
        const newEducationDetails = [...educationDetails, {...educationData, key:uuid()}];
        setEducationDetails(newEducationDetails);
    }

    return (
        <>
            <div className='editor'>
                <HeaderInputs details={headerDetails} handleChange={handleHeader} />
                <ContactInputs details={contactDetails} handleChange={handleContact} />

                {educationDetails.map((education) => (
                    <EducationInputs key={education.key} details={education} handleChange={handleEducation} />
                ))}

                {workDetails.map((work) => (
                    <WorkInputs key={work.key} details={work} handleChange={handleWork} />
                ))}
                <button onClick={addEducation}>Add Education</button>

                {projectDetails.map((project) => (
                    <ProjectInputs key={project.key} details={project} handleChange={handleProject} />
                ))}
            </div>

            <div className='cv'>
                <CvHeader details={headerDetails} />

                <div className="cv-aside">
                    <CvContact details={contactDetails} />
                    {educationDetails.map((education) => (
                        <CvEducation key={education.key} details={education} />
                    ))}
                </div>

                <div className="cv-main">
                    {workDetails.map((work) => (
                        <CvWork key={work.key} details={work} />
                    ))}
                    {projectDetails.map((project) => (
                        <CvProject key={project.key} details={project} />
                    ))}
                </div>
            </div>
        </>
    );
}

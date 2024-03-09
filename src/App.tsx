import { CvHeader, HeaderInputs } from './components/Header';
import { CvContact, ContactInputs } from './components/Contact';
import { CvEducation, EducationInputs, Details as EducationDetails } from './components/Education';
import { WorkInputs, CvWork, Details as WorkDetails } from './components/Work';
import { ProjectInputs, CvProject, Details as ProjectDetails } from './components/Projects';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style/style.scss';

const headerData = {
    fullName:'',
    niche:'',
    key: uuid()
}

const contactData = {
    email:'', 
    contactNumber:'', 
    address:'',
    key: uuid()
}

const projectData = { 
    project:'', 
    description:'', 
    key: uuid() 
}

const workData = {
    companyName: '',
    positionTitle:'',
    startDate:'',
    endDate:'',
    location: '',
    description: '',
    key: uuid()
}

const educationData = {
    school: '',
    field: '',
    startYear: '',
    endYear: '',
    key: uuid()
}

export default function App() {
    const [headerDetails, setHeaderDetails] = useState({...headerData});
    const [contactDetails, setContactDetails] = useState({...contactData});

    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([{ ...projectData }]);
    const [workDetails, setWorkDetails] = useState<WorkDetails[]>([{ ...workData }]);
    const [educationDetails, setEducationDetails] = useState<EducationDetails[]>([{ ...educationData }]);
    
    // function loadSampleDetails() {
    //     const newHeaderDetails = { ...headerDetails, fullName: 'Nathan Drake', niche: 'Frontend Dev' };
    //     const newContactDetails = {
    //         ...contactDetails,
    //         email: 'nate.drake@gmail.com',
    //         contact: '(123) 456 7890',
    //         address: '123 Main Street Apartment 4B Springfield, IL 62701'
    //     }

    //     setHeaderDetails(newHeaderDetails);
    //     setContactDetails(newContactDetails);
    // }

    function handleHeaderDetails(value:string, key:string) {
        setHeaderDetails(prevDetails => ({ ...prevDetails, [key]:value}));
    }

    function handleContactDetails(value:string, key:string) {
        setContactDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }

    function handleWorkDetails(value:string, property: keyof WorkDetails, key:string) {
        const prevDetails = [...workDetails]
        const workIndex = prevDetails.findIndex((work) => work.key === key);
        prevDetails[workIndex][property] = value;
        setWorkDetails(prevDetails);
    }

    function handleProjectDetails(value:string, property: keyof ProjectDetails, key:string) {
        const prevDetails = [...projectDetails]
        const projectIndex = prevDetails.findIndex((proj) => proj.key === key);
        prevDetails[projectIndex][property] = value;
        setProjectDetails(prevDetails);
    }
    
    function handleEducationDetails(value:string, property: keyof EducationDetails, key:string) {
        const prevDetails = [...educationDetails]
        const educationIndex = prevDetails.findIndex((education) => education.key === key);
        prevDetails[educationIndex][property] = value;
        setEducationDetails(prevDetails);
    }

    function addEducation() {
        const newEducationDetails = [...educationDetails, {...educationData, key:uuid()}];
        setEducationDetails(newEducationDetails);
    }

    return (
        <>
            <div className='editor'>
                <HeaderInputs details={headerDetails} handleChange={handleHeaderDetails} />
                <ContactInputs details={contactDetails} handleChange={handleContactDetails} />

                {educationDetails.map((education) => (
                    <EducationInputs key={education.key} details={education} handleChange={handleEducationDetails} />
                ))}

                {workDetails.map((work) => (
                    <WorkInputs key={work.key} details={work} handleChange={handleWorkDetails} />
                ))}
                <button onClick={addEducation}>Add Education</button>

                {projectDetails.map((project) => (
                    <ProjectInputs key={project.key} details={project} handleChange={handleProjectDetails} />
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

            {/* <div className="playground">
                <TextInput 
                    label='State Test'
                    name='state-test'
                    value={stateTest[0]['one']}
                    onChange={(e: { target: { value: string; }; }) => handleWorkDetails(e.target.value, 'location')}
                />
            </div> */}
        </>
    );
}

// id for single data components
// structure for load sample vs current edit

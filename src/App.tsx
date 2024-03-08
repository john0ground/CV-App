import { CvHeader, HeaderInputs } from './components/Header';
import { CvContact, ContactInputs } from './components/Contact';
import { CvEducation, EducationInputs } from './components/Education';
import { WorkInputs, CvWork } from './components/Work';
import { ProjectInputs, CvProject, Details as ProjectDetails } from './components/Projects';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style/style.scss';

export default function App() {
    const [headerDetails, setHeaderDetails] = useState({fullName: '', niche: ''});
    const [contactDetails, setContactDetails] = useState({email:'', contactNumber:'', address:''});

    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([{ project:'', description:'', key: uuid() }]);
    const [workDetails, setWorkDetails] = useState({
        companyName: '',
        positionTitle:'',
        startDate:'',
        endDate:'',
        location: '',
        description: ''
    });
    const [educationDetails, setEducationDetails] = useState({
        school: '',
        field: '',
        startYear: '',
        endYear: ''
    });

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

    function handleWorkDetails(value:string, key:string) {
        setWorkDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }

    function handleProjectDetails(value:string, property: keyof ProjectDetails, key:string) {
        const prevDetails = [...projectDetails]
        const projectIndex = prevDetails.findIndex((proj) => proj.key === key);
        prevDetails[projectIndex][property] = value;

        setProjectDetails(prevDetails);
    }
    
    function handleEducationDetails(value:string, key:string) {
        setEducationDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }

    return (
        <>
            <div className='editor'>
                <HeaderInputs details={headerDetails} handleChange={handleHeaderDetails} />
                <ContactInputs details={contactDetails} handleChange={handleContactDetails} />
                <EducationInputs details={educationDetails} handleChange={handleEducationDetails} />
                <WorkInputs details={workDetails} handleChange={handleWorkDetails} />
                <button>Add Project</button>

                {projectDetails.map((project) => (
                    <ProjectInputs key={project.key} details={project} handleChange={handleProjectDetails} />
                ))}
            </div>

            <div className='cv'>
                <CvHeader details={headerDetails} />

                <div className="cv-aside">
                    <CvContact details={contactDetails} />
                    <CvEducation details={educationDetails} />
                </div>

                <div className="cv-main">
                    <CvWork details={workDetails} />
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

//  project details mapping
//  place key on every component from map

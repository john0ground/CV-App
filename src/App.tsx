import { CvHeader, HeaderInputs } from './components/Header';
import { CvContact, ContactInputs } from './components/Contact';
import { CvEducation, EducationInputs } from './components/Education';
import { WorkInputs, CvWork } from './components/Work';
import { ProjectInputs, CvProject } from './components/Projects';

import { useState } from 'react';
import './style/style.scss';

import { TextInput } from './components/Inputs';

export default function App() {
    const [headerDetails, setHeaderDetails] = useState({fullName: '', niche: ''});
    const [contactDetails, setContactDetails] = useState({email:'', contactNumber:'', address:''});
    const [projectDetails, setProjectDetails] = useState({ project:'', description:'' });
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

    function loadSampleDetails() {
        const newHeaderDetails = { ...headerDetails, fullName: 'Nathan Drake', niche: 'Frontend Dev' };
        const newContactDetails = {
            ...contactDetails,
            email: 'nate.drake@gmail.com',
            contact: '(123) 456 7890',
            address: '123 Main Street Apartment 4B Springfield, IL 62701'
        }

        setHeaderDetails(newHeaderDetails);
        setContactDetails(newContactDetails);
    }

    function handleHeaderDetails(value:string, key:string) {
        setHeaderDetails(prevDetails => ({ ...prevDetails, [key]:value}));
    }

    function handleContactDetails(value:string, key:string) {
        setContactDetails(prevDetails => ({ ...prevDetails, [key]:value }));
        loadSampleDetails();
    }

    function handleWorkDetails(value:string, key:string) {
        setWorkDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }

    function handleProjectDetails(value:string, key:string) {
        setProjectDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }
    
    function handleEducationDetails(value:string, key:string) {
        setEducationDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    }

    const stateTest = [{one: 'one', two: 'two'}, {three: 'three', four: 'four'}];
    console.log(stateTest);

    return (
        <>
            <div className='editor'>
                <HeaderInputs details={headerDetails} handleChange={handleHeaderDetails} />
                <ContactInputs details={contactDetails} handleChange={handleContactDetails} />
                <EducationInputs details={educationDetails} handleChange={handleEducationDetails} />
                <WorkInputs details={workDetails} handleChange={handleWorkDetails} />
                <button>Add Work</button>

                <ProjectInputs details={projectDetails} handleChange={handleProjectDetails} />
            </div>

            <div className='cv'>
                <CvHeader details={headerDetails} />

                <div className="cv-aside">
                    <CvContact details={contactDetails} />
                    <CvEducation details={educationDetails} />
                </div>

                <div className="cv-main">
                    <CvWork details={workDetails} />
                    <CvProject details={projectDetails} />
                </div>
            </div>

            <div className="playground">
                <TextInput 
                    label='State Test'
                    name='state-test'
                    value={stateTest[0]['one']}
                    onChange={(e: { target: { value: string; }; }) => handleWorkDetails(e.target.value, 'location')}
                />
            </div>
        </>
    );
}

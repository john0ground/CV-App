import { Details as EducationDetails } from './components/Education';
import { Details as WorkDetails } from './components/Work';
import { Details as ProjectDetails } from './components/Projects';
import Cv from './components/CV';
import {
    headerData,
    contactData,
    projectData,
    workData,
    educationData
} from './data/cvData';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const userData = {
    header: { ...headerData },
    contact: { ...contactData },
    education: [{ ...educationData }],
    project: [{ ...projectData }],
    work: [{ ...workData }]
}

const sampleData = {}

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

export default function App() {
    const [currentCvData, setCurrentCvData] = useState(userData);

    function handleHeaderDetails(value:string, key:string) {
        const newHeaderDetails = { ...currentCvData.header, [key]:value };
        setCurrentCvData(prevData => (
            {...prevData, header:newHeaderDetails}
        ));
    }

    function handleContactDetails(value:string, key:string) {
        const newContactDetails = { ...currentCvData.contact, [key]:value };
        setCurrentCvData(prevData => (
            {...prevData, contact:newContactDetails}
        ));
    }

    function handleEducationDetails(value:string, property: keyof EducationDetails, key:string) {
        const newEducationDetails = [...currentCvData.education];
        const educationIndex = newEducationDetails.findIndex((education) => education.key === key);
        newEducationDetails[educationIndex][property] = value;

        setCurrentCvData(prevData => (
            {...prevData, education:newEducationDetails}
        ));
    }

    function handleProjectDetails(value:string, property: keyof ProjectDetails, key:string) {
        const newProjectDetails = [...currentCvData.project];
        const projectIndex = newProjectDetails.findIndex((proj) => proj.key === key);
        newProjectDetails[projectIndex][property] = value;

       setCurrentCvData(prevData => (
            {...prevData, project:newProjectDetails}
       ));
    }

    function handleWorkDetails(value:string, property: keyof WorkDetails, key:string) {
        const newWorkDetails = [...currentCvData.work];
        const workIndex = newWorkDetails.findIndex((work) => work.key === key);
        newWorkDetails[workIndex][property] = value;

        setCurrentCvData(prevData => (
            {...prevData, work:newWorkDetails}
        ));
    }

    return (<Cv 
                handleHeader= {handleHeaderDetails}
                handleContact = {handleContactDetails}
                handleEducation = {handleEducationDetails}
                handleProject = {handleProjectDetails}
                handleWork = {handleWorkDetails}

                headerDetails = {currentCvData.header}
                contactDetails = {currentCvData.contact}
                educationDetails = {currentCvData.education}
                projectDetails = {currentCvData.project} 
                workDetails = {currentCvData.work}
            />)
}

// adding cv component
// different input types

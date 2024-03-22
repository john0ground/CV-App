import { Details as HeaderDetails } from './components/Header';
import { Details as ContactDetails } from './components/Contact';
import { Details as SummaryDetails } from './components/Summary';
import { Details as EducationDetails } from './components/Education';
import { Details as WorkDetails } from './components/Work';
import { Details as ProjectDetails } from './components/Projects';
import { Details as SkillDetails } from './components/Skills';
import Cv from './components/CV';
import {
    headerData,
    contactData,
    summaryData,
    projectData,
    workData,
    educationData,
} from './data/cvData';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';  

interface CvData {
    header: HeaderDetails;
    contact: ContactDetails;
    summary: SummaryDetails;
    education: EducationDetails[];
    project: ProjectDetails[];
    work: WorkDetails[];
    skills: SkillDetails[];
}

const userData:CvData = {
    header: { ...headerData },
    summary: { ...summaryData },
    contact: { ...contactData },
    education: [{ ...educationData }],
    project: [{ ...projectData }],
    work: [{ ...workData }],
    skills: []
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

    // function toggleShowContact(key:string) {
    //     function searchDataArray(arr) {
    //         console.log(arr);
    //     }

    //     for (const prop in currentCvData) {
    //         const currentData = currentCvData[prop];
    //         console.log(currentData.key);   
    //         if (currentData.key === key) {
    //             const newActiveStatus = !currentData.active;
    //             const newData = { ...currentData, active: newActiveStatus }
    //             setCurrentCvData(prevData => (
    //                 {...prevData, [prop]:newData}
    //             ));
    //             break;
    //         } else {}
    //     }
    // }

    function handleSummary(value:string) {
        const newSummary = { ...currentCvData.summary, summary:value };
        setCurrentCvData(prevData => (
            {...prevData, summary:newSummary}
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

    function addEducation() {
        const newEducationDetails = [...currentCvData.education, {...educationData, key:uuid()}];
        setCurrentCvData(prevData => (
            {...prevData, education:newEducationDetails}
        ));
    }

    function addProject() {
        const newProjectDetails = [...currentCvData.project, {...projectData, key:uuid()}];
        setCurrentCvData(prevData => (
            {...prevData, project:newProjectDetails}
        ));
    }

    function addWork() {
        const newWorkDetails = [...currentCvData.work, {...workData, key:uuid()}];
        setCurrentCvData(prevData => (
            {...prevData, work:newWorkDetails}
        ));
    }

    function addSkill(value:string) {
        const newSkillDetails = [...currentCvData.skills, {skill:value, key:uuid()}];
        setCurrentCvData(prevData => (
            {...prevData, skills:newSkillDetails}
        ));
    }

    return (<Cv 
                handleHeader= {handleHeaderDetails}
                handleContact = {handleContactDetails}
                handleSummary={handleSummary}
                handleEducation = {handleEducationDetails}
                handleProject = {handleProjectDetails}
                handleWork = {handleWorkDetails}

                headerDetails = {currentCvData.header}
                contactDetails = {currentCvData.contact}
                summaryDetails= {currentCvData.summary}
                educationDetails = {currentCvData.education}
                projectDetails = {currentCvData.project} 
                workDetails = {currentCvData.work}
                skillDetails={currentCvData.skills}

                addEducation = {addEducation}
                addProject = {addProject}
                addWork = {addWork}
                addSkill = {addSkill}
            />)
}

// sample data
// different input types

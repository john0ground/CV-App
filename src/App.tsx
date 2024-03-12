import { Details as HeaderDetails } from './components/Header';
import { Details as ContactDetails } from './components/Contact'
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
// import './../style/style.scss';

const userData = {
    header: { ...headerData },
    contact: { ...contactData },
    education: [{ ...educationData }],
    project: [{ ...projectData }],
    work: [{ ...workData }],

    updateHeader: function(newData: HeaderDetails) {
        this.header = { ...newData }
    },
    updateContact: function(newData: ContactDetails) {
        this.contact = { ...newData }
    },
    updateEducation: function(newData: EducationDetails[]) {
        this.education = [ ...newData ]
    },
    updateProject: function(newData: ProjectDetails[]) {
        this.project = [ ...newData ]
    },
    updateWork: function(newData: WorkDetails[]) {
        this.work = [ ...newData ]
    }
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

    const [headerDetails, setHeaderDetails] = useState(userData.header);
    const [contactDetails, setContactDetails] = useState(userData.contact);
    const [educationDetails, setEducationDetails] = useState<EducationDetails[]>(userData.education);
    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>(userData.project);
    const [workDetails, setWorkDetails] = useState<WorkDetails[]>(userData.work);

    function handleHeaderDetails(value:string, key:string) {
        const prevDetails = { ...headerDetails, [key]:value };
        currentCvData.updateHeader(prevDetails);
        setHeaderDetails(prevDetails);
    }

    function handleContactDetails(value:string, key:string) {
        const prevDetails = { ...contactDetails, [key]:value };
        currentCvData.updateContact(prevDetails);
        setContactDetails(prevDetails);
    }

    function handleEducationDetails(value:string, property: keyof EducationDetails, key:string) {
        const prevDetails = [...educationDetails]
        const educationIndex = prevDetails.findIndex((education) => education.key === key);
        prevDetails[educationIndex][property] = value;

        currentCvData.updateEducation(prevDetails);
        setEducationDetails(prevDetails);
    }

    function handleProjectDetails(value:string, property: keyof ProjectDetails, key:string) {
        const prevDetails = [...projectDetails]
        const projectIndex = prevDetails.findIndex((proj) => proj.key === key);
        prevDetails[projectIndex][property] = value;

        currentCvData.updateProject(prevDetails);
        setProjectDetails(prevDetails);
    }

    function handleWorkDetails(value:string, property: keyof WorkDetails, key:string) {
        const prevDetails = [...workDetails]
        const workIndex = prevDetails.findIndex((work) => work.key === key);
        prevDetails[workIndex][property] = value;

        currentCvData.updateWork(prevDetails);
        setWorkDetails(prevDetails);
    }

    return (<Cv 
                handleHeader= {handleHeaderDetails}
                handleContact = {handleContactDetails}
                handleEducation = {handleEducationDetails}
                handleProject = {handleProjectDetails}
                handleWork = {handleWorkDetails}

                headerDetails = {headerDetails}
                contactDetails = {contactDetails}
                educationDetails = {educationDetails}
                projectDetails = {projectDetails} 
                workDetails = {workDetails}
            />)
}

// avoid state duplication
// different input types

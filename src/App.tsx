import { Details as EducationDetails } from './components/Education';
import { Details as WorkDetails } from './components/Work';
import { Details as ProjectDetails } from './components/Projects';
import Cv from './components/CV';
import {
    projectData,
    workData,
    educationData,
    cvUserData,
    cvSampleData
} from './data/cvData';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';  

let userData = {...cvUserData}
let sampleData = {...cvSampleData}

export default function App() {
    const [currentCvData, setCurrentCvData] = useState(userData);
    const [darkMode, setDarkMode] = useState(false);
    const [profileImageSrc, setProfileImageSrc] = useState('');

    function toggleCurrentData() {
        if (currentCvData.key === userData.key) {
            userData = {...currentCvData}
            setCurrentCvData(sampleData);
        } else {
            sampleData = {...currentCvData}
            setCurrentCvData(userData)
        }
    }

    function toggleTheme() {
        setDarkMode(!darkMode);
    }

    function addProfileImage(imgFile: File) {
        const imgSrc = URL.createObjectURL(imgFile);
        setProfileImageSrc(imgSrc);
    }

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

    function deleteProfileImage(key:string) {
        setProfileImageSrc(key);
    }

    function deleteProject(key:string) {
        const projectIndex = currentCvData.project.findIndex(proj => proj.key === key);
        const newProjectDetails = [...currentCvData.project];
        newProjectDetails.splice(projectIndex, 1);

        setCurrentCvData(prevData => (
            {...prevData, project:newProjectDetails}
        ));
    }

    function deleteEducation(key:string) {
        const educationIndex = currentCvData.project.findIndex(education => education.key === key);
        const newEducationDetails = [...currentCvData.education];
        newEducationDetails.splice(educationIndex, 1);

        setCurrentCvData(prevData => (
            {...prevData, education: newEducationDetails}
        ));
    }

    function deleteWork(key:string) {
        const workIndex = currentCvData.work.findIndex(work => work.key === key);
        const newWorkDetails = [...currentCvData.work];
        newWorkDetails.splice(workIndex, 1);

        setCurrentCvData(prevData => (
            {...prevData, work:newWorkDetails}
        ));
    }

    function deleteSkill(key:string) {
        const skillIndex = currentCvData.skills.findIndex(skill => skill.key === key);
        const newSkillDetails = [...currentCvData.skills];
        newSkillDetails.splice(skillIndex, 1);

        setCurrentCvData(prevData => (
            {...prevData, skills:newSkillDetails}
        ));
    }

    return (
        <div id="app" data-theme={darkMode? 'dark': 'light'}>
            <div className="customize-bar">
                hello
            </div>
            <Cv 
                handleHeader= {handleHeaderDetails}
                handleContact = {handleContactDetails}
                handleSummary={handleSummary}
                handleEducation = {handleEducationDetails}
                handleProject = {handleProjectDetails}
                handleWork = {handleWorkDetails}

                profileImageSrc = {profileImageSrc}
                headerDetails = {currentCvData.header}
                contactDetails = {currentCvData.contact}
                summaryDetails= {currentCvData.summary}
                educationDetails = {currentCvData.education}
                projectDetails = {currentCvData.project} 
                workDetails = {currentCvData.work}
                skillDetails={currentCvData.skills}

                addProfileImage = {addProfileImage}
                addEducation = {addEducation}
                addProject = {addProject}
                addWork = {addWork}
                addSkill = {addSkill}

                deleteProfileImage={deleteProfileImage}
                deleteProject={deleteProject}
                deleteEducation={deleteEducation}
                deleteWork={deleteWork}
                deleteSkill={deleteSkill}

                toggleCvData={toggleCurrentData}
                toggleTheme={toggleTheme}
                darkMode = {darkMode}
                title={currentCvData.title}
            />
        </div>
    )
}

//  fonts, theme

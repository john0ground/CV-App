import { Details as EducationDetails } from './components/Education';
import { Details as WorkDetails } from './components/Work';
import { Details as ProjectDetails } from './components/Projects';
import Header from './components/Header';
import CustomizeSidebar from './components/CustomizeSidebar';
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
    const [customizeBarActive, setCustomizeBarActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [layoutIndex, setLayoutIndex] = useState(0);
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

    function toggleCustomizeBar() {
        setCustomizeBarActive(!customizeBarActive);
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
            <Header 
                title={currentCvData.title} 
                toggleCvData={toggleCurrentData} 
                toggleTheme={toggleTheme}
                toggleCustomizeBar={toggleCustomizeBar} 
                darkMode={darkMode} 
                customizeActive={customizeBarActive}
            />
            <CustomizeSidebar 
                active={customizeBarActive}
                layoutIndex={layoutIndex} 
                toggleCustomizeBar={toggleCustomizeBar} 
                changeLayout={(index) => setLayoutIndex(index)} 
            />
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

                layoutIndex={layoutIndex}
            />
        </div>
    )
}

//  fonts, theme

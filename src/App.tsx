// import { CvEducation, EducationInputs, Details as EducationDetails } from './components/Education';
// import { WorkInputs, CvWork, Details as WorkDetails } from './components/Work';
import { Details as ProjectDetails } from './components/Projects';
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
    project: [{ ...projectData }],
    work: [{ ...workData }],
    education: [ { ...educationData } ],

    updateProject: function(data: ProjectDetails[]) {
        this.project = { ...data }
    }
}

const sampleData = {}

export default function App() {
    const [cvDataSelected, changeCvDataSelected] = useState(userData);
    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>(userData.project);

    function handleProjectDetails(value:string, property: keyof ProjectDetails, key:string) {
        const prevDetails = [...projectDetails]
        const projectIndex = prevDetails.findIndex((proj) => proj.key === key);
        prevDetails[projectIndex][property] = value;

        cvDataSelected.updateProject(prevDetails);
        setProjectDetails(prevDetails);
    }
}
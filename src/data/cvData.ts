import { Details as HeaderDetails } from '../components/Header';
import { Details as ContactDetails } from '../components/Contact';
import { Details as SummaryDetails } from '../components/Summary';
import { Details as EducationDetails } from '../components/Education';
import { Details as WorkDetails } from '../components/Work';
import { Details as ProjectDetails } from '../components/Projects';
import { Details as SkillDetails } from '../components/Skills';

import { v4 as uuid } from "uuid";

export interface CvData {
    header: HeaderDetails;
    contact: ContactDetails;
    summary: SummaryDetails;
    education: EducationDetails[];
    project: ProjectDetails[];
    work: WorkDetails[];
    skills: SkillDetails[];
    key: string;
    title:string;
}


const headerData = {
    fullName:'',
    niche:'',
    key: uuid()
}

const summaryData = {
    summary:'',
    key: uuid()
}

const contactData = {
    email:'', 
    contactNumber:'', 
    address:'',
    active:false,
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

const skillData = {
    skill: '',
    key: uuid()
}

const cvUserData:CvData = {
    header: { ...headerData },
    summary: { ...summaryData },
    contact: { ...contactData },
    education: [],
    project: [],
    work: [],
    skills: [],
    key: uuid(),
    title: 'user-data'
}

const cvSampleData:CvData = {
    header: { ...headerData, fullName: 'Anna Cruz', niche: 'UI Designer' },
    summary: { 
        ...summaryData,
        summary: 'Experienced UI/UX designer passionate about crafting intuitive digital experiences. Skilled in user research, wireframing, and collaboration. Proficient in design tools. Dedicated to creating engaging solutions that meet user needs.'
    },
    contact: {
        ...contactData,
        email: 'anna.cruz@gmail.com',
        contactNumber: '(123) 456 7890',
        address: '123 Main Street Apartment 4B Springfield, IL 62701'
    },
    education: [{
        ...educationData,
        school: 'Art Institute of Seattle',
        field: 'Bachelor of Science in Interaction Design',
        startYear: '2015',
        endYear: '2019'
    }],
    project: [
        {
            ...projectData,
            project: 'EcoEats Mobile App Redesign',
            description: 'Led the redesign of EcoEats, a sustainable food delivery app, focusing on enhancing user engagement and accessibility.',
            key: uuid()
        },
        {
            ...projectData,
            project: 'TravelPlanner Web Application',
            description: 'Designed the user interface for TravelPlanner, a web application aimed at simplifying travel planning and itinerary management.',
            key: uuid()
        }
    ],
    work: [
        {
            ...workData,
            companyName: 'PixelPerfect Design Studio',
            positionTitle: 'UI/UX Designer',
            startDate: '02/2020',
            endDate: '08/2021',
            description: 'Led UI/UX design projects, ensuring alignment with user needs and business objectives. Conducted user research, created wireframes and prototypes, and collaborated with cross-functional teams to deliver exceptional digital experiences.',
            key: uuid()
        },
        {
            ...workData,
            companyName: 'TechXperience, San Francisco',
            positionTitle: 'UX Designer Intern',
            startDate: '07/2019',
            endDate: '12/2019',
            description: 'Assisted in user research and usability testing activities. Contributed to the design and iteration of user interfaces for web and mobile applications.',
            key: uuid()
        }
    ],
    skills: [
        { ...skillData, skill: 'UI, UX', key: uuid() },
        { ...skillData, skill: 'Wireframing & Prototyping', key: uuid() },
        { ...skillData, skill: 'Interaction Design', key: uuid() },
        { ...skillData, skill: 'Information Architecture', key: uuid() },
        { ...skillData, skill: 'Visual Design', key: uuid() },
        { ...skillData, skill: 'Interaction Design', key: uuid() },
        { ...skillData, skill: 'Adobe Creative Suite', key: uuid() },
        { ...skillData, skill: 'Figma', key: uuid() },
    ],
    key: uuid(),
    title: 'sample-data'
}

export {
    headerData,
    contactData,
    summaryData,
    projectData,
    workData,
    educationData,
    skillData,
    cvUserData,
    cvSampleData
}

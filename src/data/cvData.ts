import { v4 as uuid } from "uuid";

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

const skillData = {
    skill: '',
    key: uuid()
}

export {
    headerData,
    contactData,
    summaryData,
    projectData,
    workData,
    educationData,
    skillData
}

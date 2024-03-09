import { v4 as uuid } from "uuid";

const headerData = {
    fullName:'',
    niche:'',
    key: uuid()
}

const contactData = {
    email:'', 
    contactNumber:'', 
    address:'',
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

export {
    headerData,
    contactData,
    projectData,
    workData,
    educationData
}

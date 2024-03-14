import { CvHeader, HeaderInputs, HeaderHandler, Details as HeaderDetails } from './Header';
import { CvContact, ContactInputs, ContactHandler, Details as ContactDetails } from './Contact';
import { CvEducation, EducationInputs, AddEducation, EducationHandler, Details as EducationDetails } from './Education';
import { WorkInputs, CvWork, WorkHandler, AddWork, Details as WorkDetails } from './Work';
import { ProjectInputs, CvProject, ProjectHandler, AddProject, Details as ProjectDetails } from './Projects';
import { SkillInput, CvSkill, AddSkill, Details as SkillDetails } from './Skills';

import './../style/style.scss';

interface CvProps {
    handleHeader: HeaderHandler;
    handleContact: ContactHandler;
    handleEducation: EducationHandler;
    handleProject: ProjectHandler;
    handleWork: WorkHandler;

    headerDetails: HeaderDetails;
    contactDetails: ContactDetails;
    educationDetails: EducationDetails[];
    projectDetails: ProjectDetails[];
    workDetails: WorkDetails[];
    skillDetails: SkillDetails[];

    addEducation: AddEducation;
    addProject: AddProject;
    addWork: AddWork;
    addSkill: AddSkill;
}

export default function Cv({ 
        handleHeader,
        handleContact,
        handleEducation,
        handleProject, 
        handleWork,

        headerDetails,
        contactDetails,
        educationDetails,
        projectDetails,
        workDetails,
        skillDetails,

        addEducation,
        addProject,
        addWork,
        addSkill
    }: CvProps) {

    return (
        <>
            <div className='editor'>
                <HeaderInputs details={headerDetails} handleChange={handleHeader} />
                <ContactInputs details={contactDetails} handleChange={handleContact} />

                {educationDetails.map((education) => (
                    <EducationInputs key={education.key} details={education} handleChange={handleEducation} />
                ))}
                <button onClick={addEducation}>Add Education</button>

                {workDetails.map((work) => (
                    <WorkInputs key={work.key} details={work} handleChange={handleWork} />
                ))}
                <button onClick={addWork}>Add Work</button>

                {projectDetails.map((project) => (
                    <ProjectInputs key={project.key} details={project} handleChange={handleProject} />
                ))}
                <button onClick={addProject}>Add Project</button>

                <SkillInput addSkill={addSkill} />
            </div>

            <div className='cv'>
                <CvHeader details={headerDetails} />

                <div className="cv-aside">
                    <CvContact details={contactDetails} />
                    {educationDetails.map((education) => (
                        <CvEducation key={education.key} details={education} />
                    ))}
                    {skillDetails.map(skill => (
                        <CvSkill key={skill.key} details={skill} />
                    ))}
                </div>

                <div className="cv-main">
                    {workDetails.map((work) => (
                        <CvWork key={work.key} details={work} />
                    ))}
                    {projectDetails.map((project) => (
                        <CvProject key={project.key} details={project} />
                    ))}
                </div>
            </div>
        </>
    );
}

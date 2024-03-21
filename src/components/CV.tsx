import { HeaderEditSection, CvHeader, HeaderHandler, Details as HeaderDetails } from './Header';
import { ContactEditSection, CvContact, ContactHandler, Details as ContactDetails } from './Contact';
import { SummaryEditSection, CvSummary, SummaryHandler, Details as SummaryDetails } from './Summary';
import { EducationEditSection, CvEducation, AddEducation, EducationHandler, Details as EducationDetails } from './Education';
import { WorkEditSection, CvWork, WorkHandler, AddWork, Details as WorkDetails } from './Work';
import { ProjectEditSection, CvProject, ProjectHandler, AddProject, Details as ProjectDetails } from './Projects';
import { SkillEditSection, CvSkill, AddSkill, Details as SkillDetails } from './Skills';

import './../style/style.scss';

interface CvProps {
    handleHeader: HeaderHandler;
    handleContact: ContactHandler;
    handleSummary: SummaryHandler;
    handleEducation: EducationHandler;
    handleProject: ProjectHandler;
    handleWork: WorkHandler;

    headerDetails: HeaderDetails;
    contactDetails: ContactDetails;
    summaryDetails: SummaryDetails;
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
        handleSummary,
        handleEducation,
        handleProject, 
        handleWork,

        headerDetails,
        contactDetails,
        summaryDetails,
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
                <div className="editor-header">
                    <h2>Header</h2>
                    <HeaderEditSection headerDetails={headerDetails} handleChange={handleHeader} />
                </div>

                <div className="editor-aside">
                    <h2>Aside</h2>
                    <ContactEditSection contactDetails={contactDetails} handleChange={handleContact} />
                    <EducationEditSection educationDetails={educationDetails} handleChange={handleEducation} addData={addEducation}/>
                    <SkillEditSection addData={addSkill} />
                </div>

                <div className="editor-main">
                    <h2>Main</h2>
                    <SummaryEditSection summaryDetails={summaryDetails} handleChange={handleSummary} />
                    <WorkEditSection workDetails={workDetails} handleChange={handleWork} addData={addWork}/>                    
                    <ProjectEditSection projectDetails={projectDetails} handleChange={handleProject} addData={addProject} />
                </div>
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
                    <CvSummary details={summaryDetails} />
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

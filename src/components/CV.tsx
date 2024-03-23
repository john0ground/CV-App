import { HeaderEditSection, CvHeader, HeaderHandler, Details as HeaderDetails } from './Header';
import { ContactEditSection, CvContact, ContactHandler, Details as ContactDetails } from './Contact';
import { SummaryEditSection, CvSummary, SummaryHandler, Details as SummaryDetails } from './Summary';
import { EducationEditSection, CvEducation, AddEducation, EducationHandler, DeleteEducation, Details as EducationDetails } from './Education';
import { WorkEditSection, CvWork, WorkHandler, AddWork, DeleteWork, Details as WorkDetails } from './Work';
import { ProjectEditSection, CvProject, ProjectHandler, AddProject, DeleteProject, Details as ProjectDetails } from './Projects';
import { SkillEditSection, CvSkill, AddSkill, DeleteSkill, Details as SkillDetails } from './Skills';

import { useRef } from 'react';
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

    deleteProject: DeleteProject;
    deleteEducation: DeleteEducation;
    deleteWork: DeleteWork;
    deleteSkill: DeleteSkill;
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
        addSkill,

        deleteProject,
        deleteEducation,
        deleteWork,
        deleteSkill
    }: CvProps) {

    const deleteModalRef = useRef<HTMLDialogElement>(null);
    const deleteDataRef = useRef<(() => void) | null>(null);

    function openDeleteModal(deleteDataProp: (key: string) => void, key: string) {
        const deleteData = () => {
            deleteDataProp(key);
        };
        deleteDataRef.current = deleteData;

        if (deleteModalRef.current) {
            deleteModalRef.current.showModal();
        }
    }

    function closeDeleteModal() {
        if (deleteModalRef.current) {
            deleteModalRef.current.close();
        }
    }

    function handleDelete() {
        if (deleteDataRef.current) {
            deleteDataRef.current();
        }
        closeDeleteModal();
    }

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
                    <EducationEditSection 
                        educationDetails={educationDetails} 
                        handleChange={handleEducation} 
                        addData={addEducation}
                        handleDelete={(key:string) => openDeleteModal(deleteEducation, key)}
                    />
                    <SkillEditSection 
                        skillDetails={skillDetails} 
                        addData={addSkill} 
                        handleDelete={(key:string) => openDeleteModal(deleteSkill, key)} 
                    />
                </div>

                <div className="editor-main">
                    <h2>Main</h2>
                    <SummaryEditSection summaryDetails={summaryDetails} handleChange={handleSummary} />
                    <WorkEditSection 
                        workDetails={workDetails} 
                        handleChange={handleWork} 
                        addData={addWork}
                        handleDelete={(key:string) => openDeleteModal(deleteWork, key)}
                    />                    
                    <ProjectEditSection 
                        projectDetails={projectDetails} 
                        handleChange={handleProject} 
                        addData={addProject} 
                        handleDelete={(key:string) => openDeleteModal(deleteProject, key)} 
                    />
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

            <dialog ref={deleteModalRef}>   
                <p>Delete this project?</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={closeDeleteModal}>Cancel</button>
            </dialog>
        </>
    );
}

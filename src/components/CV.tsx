import { ProfileImageEditSection, CvProfileImage, AddProfileImage } from './ProfileImage';
import { HeaderEditSection, CvHeader, HeaderHandler, Details as HeaderDetails } from './Header';
import { ContactEditSection, CvContact, ContactHandler, Details as ContactDetails } from './Contact';
import { SummaryEditSection, CvSummary, SummaryHandler, Details as SummaryDetails } from './Summary';
import { EducationEditSection, CvEducation, AddEducation, EducationHandler, Details as EducationDetails } from './Education';
import { WorkEditSection, CvWork, WorkHandler, AddWork, Details as WorkDetails } from './Work';
import { ProjectEditSection, CvProject, ProjectHandler, AddProject, Details as ProjectDetails } from './Projects';
import { SkillEditSection, CvSkill, AddSkill, Details as SkillDetails } from './Skills';

import { useRef } from 'react';
import './../style/style.scss';

interface CvProps {
    handleHeader: HeaderHandler;
    handleContact: ContactHandler;
    handleSummary: SummaryHandler;
    handleEducation: EducationHandler;
    handleProject: ProjectHandler;
    handleWork: WorkHandler;

    profileImageSrc: string;
    headerDetails: HeaderDetails;
    contactDetails: ContactDetails;
    summaryDetails: SummaryDetails;
    educationDetails: EducationDetails[];
    projectDetails: ProjectDetails[];
    workDetails: WorkDetails[];
    skillDetails: SkillDetails[];

    addProfileImage: AddProfileImage
    addEducation: AddEducation;
    addProject: AddProject;
    addWork: AddWork;
    addSkill: AddSkill;

    deleteProfileImage: (key:string) => void;
    deleteProject: (key:string) => void;
    deleteEducation: (key:string) => void;
    deleteWork: (key:string) => void;
    deleteSkill: (key:string) => void;

    toggleCvData: () => void;
    title: string
}

export default function Cv({ 
        addProfileImage,
        handleHeader,
        handleContact,
        handleSummary,
        handleEducation,
        handleProject, 
        handleWork,

        profileImageSrc,
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

        deleteProfileImage,
        deleteProject,
        deleteEducation,
        deleteWork,
        deleteSkill,

        toggleCvData,
        title
    }: CvProps) {

    const deleteModalRef = useRef<HTMLDialogElement>(null);
    const deleteDataRef = useRef<(() => void) | null>(null);

    interface DeleteProps { key:string, section:string, data:string }

    function openDeleteModal(deleteDataProp: (key: string) => void, details:DeleteProps) {
        const deleteData = () => {
            deleteDataProp(details.key);
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
                <button onClick={toggleCvData}>
                    {title === 'sample-data'? 'Undo Sample': 'Load Sample'}
                </button>

                <div className="editor-header">
                    <h2>Header</h2>
                    <ProfileImageEditSection 
                        addPhoto={addProfileImage} 
                        imgSrc={profileImageSrc} 
                        handleDelete={(details) => openDeleteModal(deleteProfileImage, details)} />
                    <HeaderEditSection headerDetails={headerDetails} handleChange={handleHeader} />
                </div>

                <div className="editor-aside">
                    <h2>Aside</h2>
                    <ContactEditSection contactDetails={contactDetails} handleChange={handleContact} />
                    <EducationEditSection 
                        educationDetails={educationDetails} 
                        handleChange={handleEducation} 
                        addData={addEducation}
                        handleDelete={(details) => openDeleteModal(deleteEducation, details)}
                    />
                    <SkillEditSection 
                        skillDetails={skillDetails} 
                        addData={addSkill} 
                        handleDelete={(key:string) => deleteSkill(key)} 
                    />
                </div>

                <div className="editor-main">
                    <h2>Main</h2>
                    <SummaryEditSection summaryDetails={summaryDetails} handleChange={handleSummary} />
                    <WorkEditSection 
                        workDetails={workDetails} 
                        handleChange={handleWork} 
                        addData={addWork}
                        handleDelete={(details) => openDeleteModal(deleteWork, details)}
                    />                    
                    <ProjectEditSection 
                        projectDetails={projectDetails} 
                        handleChange={handleProject} 
                        addData={addProject} 
                        handleDelete={(details) => openDeleteModal(deleteProject, details)} 
                    />
                </div>
            </div>

            <div className='cv'>
                <div className="cv-header">
                    <CvProfileImage imgSrc={profileImageSrc} />
                    <CvHeader details={headerDetails} />
                </div>

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

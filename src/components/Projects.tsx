import { useState } from "react";
import { TextInput } from "./Inputs";
export type ProjectHandler = (value:string, property: keyof Details, key:string) => void;
export type AddProject = () => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteProject = (details:DeleteProps) => void;
export interface Details { project:string, description:string, key:string }

interface ProjectEditorProps {
    details: Details;
    handleChange: ProjectHandler;
    handleDelete: DeleteProject;
    isComplete: boolean;
}

interface ProjectEditSectionProps {
    projectDetails: Details[];
    handleChange: ProjectHandler;
    addData: AddProject;
    handleDelete: DeleteProject;
}

interface CvProjectProps {
    details: Details
}

function checkIncompleteDetails(details:Details) {
    let incomplete = false;
    Object.values(details).forEach(value => {
        if (value.length === 0) incomplete = true;
    });

    return incomplete;
}

function ProjectEditor({details, handleChange, handleDelete, isComplete}: ProjectEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const deleteDetails = {
        key: details.key,
        section: 'Project',
        data: details.project
    }

    if (!checkIncompleteDetails(details)) isComplete = true;

    return (
        <section className="data-editor" data-active={displayActive} data-complete={isComplete}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.project}</h3>
            </button>
            <button onClick={() => handleDelete(deleteDetails)}>Delete</button>
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='Project'
                        name='project'
                        value={ details.project }
                        id = { details.key }
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'project', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Description'
                        name='project-description'
                        value = { details.description } 
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description', details.key)}
                    />
                </div>
            </div>
            {!isComplete && <span>Please fill incomplete data</span>}
        </section>
    );
}

export function ProjectEditSection({ projectDetails, handleChange, addData, handleDelete }: ProjectEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const [incompleteDataIndex, setIncompleteDataIndex] = useState(-1);

    function handleAddData() {
        if (projectDetails.length === 0) return addData();

        const incompleteProjectIndex = projectDetails.findIndex(checkIncompleteDetails);
        incompleteProjectIndex > -1? setIncompleteDataIndex(incompleteProjectIndex): addData();
    }

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Projects</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                {
                    projectDetails.length > 0 && projectDetails.map((proj, index) => (
                        <ProjectEditor 
                            key={proj.key} 
                            details={proj} 
                            handleChange={handleChange} 
                            handleDelete={handleDelete}
                            isComplete={incompleteDataIndex !== index}
                        />
                    ))
                }
                <button onClick={handleAddData}>Add Project</button>
            </div>
        </section>
    );
}

export function CvProject({ details }: CvProjectProps) {
    return (
        <section>
            <h3>{details.project}</h3>
            <p>{details.description}</p>
        </section>
    );
}

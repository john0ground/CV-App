import { useState } from "react";
import { TextInput } from "./Inputs";
export type ProjectHandler = (value:string, property: keyof Details, key:string) => void;
export type AddProject = () => void;
export interface Details { project:string, description:string, key:string }

interface ProjectEditorProps {
    details: Details;
    handleChange: ProjectHandler;
}

interface ProjectEditSectionProps {
    projectDetails: Details[];
    handleChange: ProjectHandler;
    addData: AddProject;
}

interface CvProjectProps {
    details: Details
}

function ProjectEditor({details, handleChange}: ProjectEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.project}</h3>
            </button>
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
        </section>
    );
}

export function ProjectEditSection({ projectDetails, handleChange, addData }: ProjectEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Projects</h3>
            </button>
            <div className="data-editors">
                {
                    projectDetails.length > 0 && projectDetails.map((work) => (
                        <ProjectEditor key={work.key} details={work} handleChange={handleChange} />
                    ))
                }
                <button onClick={addData}>Add Project</button>
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
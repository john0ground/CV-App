import { TextInput } from "./Inputs";
export type ProjectHandler = (value:string, property: keyof Details, key:string) => void;
export type AddProject = () => void;
export interface Details { project:string, description:string, key:string }

interface ProjectInputsProps {
    details: Details;
    handleChange: ProjectHandler;
}

interface CvProjectProps {
    details: Details
}

export function ProjectInputs({details, handleChange}: ProjectInputsProps) {
    return (
        <section className="project-inputs">
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
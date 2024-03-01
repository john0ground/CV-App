import { TextInput } from "./Inputs";
type ChangeHandler = (value:string, key:string) => void;
interface Details { project:string, description:string }

interface ProjectInputsProps {
    details: Details;
    handleChange: ChangeHandler;
}

interface CvProjectProps {
    details: Details
}

function ProjectInputs({details, handleChange}: ProjectInputsProps) {
    return (
        <section className="project-inputs">
            <div className="input-row">
                <TextInput
                    label='Project'
                    name='project'
                    value={details.project}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'project')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Description'
                    name='project-description'
                    value={details.description}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description')}
                />
            </div>
        </section>
    );
}

function CvProject({ details }: CvProjectProps) {
    return (
        <section>
            <h3>{details.project}</h3>
            <p>{details.description}</p>
        </section>
    );
}

export { ProjectInputs, CvProject }

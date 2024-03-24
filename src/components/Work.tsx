import { useState } from "react";
import { TextInput } from "./Inputs";
export type WorkHandler = (value:string, property: keyof Details, key:string) => void;
export type AddWork = () => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteWork = (details:DeleteProps) => void;

export interface Details {
    companyName: string,
    positionTitle: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
    key: string
}

interface WorkEditorProps {
    details: Details;
    handleChange: WorkHandler;
    handleDelete: DeleteWork;
}

interface WorkEditSectionProps {
    workDetails: Details[];
    handleChange: WorkHandler;
    addData: AddWork;
    handleDelete: DeleteWork;
}

interface CvWorkProps {
    details: Details
}

function WorkEditor({ details, handleChange, handleDelete }: WorkEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const deleteDetails = {
        key: details.key,
        section: 'Work Experience',
        data: details.positionTitle
    }

    return (
        <section className="data-editor" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.positionTitle}</h3>
            </button>
            <button onClick={() => handleDelete(deleteDetails)}>Delete</button>
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='Company Name'    
                        name='company-name'
                        value={details.companyName}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'companyName', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Position Title'
                        name='position-title'
                        value={details.positionTitle}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'positionTitle', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Start Date'
                        name='start-date'
                        value={details.startDate}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startDate', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='End Date'
                        name='end-date'
                        value={details.endDate}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endDate', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Location'
                        name='location'
                        value={details.location}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'location', details.key)}
                    />
                </div>
            <div className="input-row">
                <TextInput
                    label='Description'
                    name='description'
                    value={details.description}
                    id = {details.key}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description', details.key)}
                />
            </div>
            </div>
        </section>
    );
}

export function WorkEditSection({ workDetails, handleChange, addData, handleDelete }: WorkEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Work Experience</h3>
            </button>
            <div className="data-editors">
                {
                    workDetails.length > 0 && workDetails.map((work) => (
                        <WorkEditor key={work.key} details={work} handleChange={handleChange} handleDelete={handleDelete} />
                    ))
                }
                <button onClick={addData}>Add Work</button>
            </div>
        </section>
    );
}

export function CvWork({ details }: CvWorkProps) {
    return (
        <section>
            <span>{ details.companyName }</span>
            <span>{ details.positionTitle }</span>
            <span>{ details.startDate }</span>
            <span>{ details.endDate }</span>
            <span>{ details.location }</span>
            <span>{ details.description }</span>
        </section>
    );
}

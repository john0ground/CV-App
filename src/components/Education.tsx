import { useState } from "react";
import { TextInput } from "./Inputs";
export type EducationHandler = (value:string, property: keyof Details, key:string) => void;
export type AddEducation = () => void;
export interface Details { 
    school: string,
    field: string,
    startYear: string,
    endYear: string
    key: string
}

interface EducationEditorProps {
    details: Details;
    handleChange: EducationHandler;
}

interface EducationEditSectionProps {
    educationDetails: Details[];
    handleChange: EducationHandler;
    addData: AddEducation;
}

interface CvEducationProps {
    details: Details
}

function EducationEditor({ details, handleChange }: EducationEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.school}</h3>
            </button>
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='School'
                        name='school'
                        value={details.school}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'school', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Field'
                        name='field'
                        value={details.field}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'field', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Start Year'
                        name='start-year'
                        value={details.startYear}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startYear', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='End Year'
                        name='end-year'
                        value={details.endYear}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endYear', details.key)}
                    />
                </div>
            </div>
        </section>
    );
}

export function EducationEditSection({ educationDetails, handleChange, addData }: EducationEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Education</h3>
            </button>
            <div className="data-editors">
                {
                    educationDetails.length > 0 && educationDetails.map((work) => (
                        <EducationEditor key={work.key} details={work} handleChange={handleChange} />
                    ))
                }
                <button onClick={addData}>Add Education</button>
            </div>
        </section>
    );
}

export function CvEducation({ details }: CvEducationProps) {
    return (
        <header>
            <h3>{details.school}</h3>
            <span>{details.field}</span>
            <span>{details.startYear}</span>
            <span>{details.endYear}</span>            
        </header>
    );
}

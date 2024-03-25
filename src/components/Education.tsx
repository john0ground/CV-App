import { useState } from "react";
import { TextInput } from "./Inputs";
export type EducationHandler = (value:string, property: keyof Details, key:string) => void;
export type AddEducation = () => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteEducation = (details:DeleteProps) => void;
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
    handleDelete: DeleteEducation;
    isComplete: boolean;
}

interface EducationEditSectionProps {
    educationDetails: Details[];
    handleChange: EducationHandler;
    addData: AddEducation;
    handleDelete: DeleteEducation;
}

interface CvEducationProps {
    details: Details
}

function checkIncompleteDetails(details:Details) {
    let incomplete = false;
    Object.values(details).forEach(value => {
        if (value.length === 0) incomplete = true;
    });

    return incomplete;
}

function EducationEditor({ details, handleChange, handleDelete, isComplete }: EducationEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const deleteDetails = {
        key: details.key,
        section: 'Education',
        data: details.school
    }

    if (!checkIncompleteDetails(details)) isComplete = true;

    return (
        <section className="data-editor" data-active={displayActive} data-complete={isComplete}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.school}</h3>
            </button>
            <button onClick={() => handleDelete(deleteDetails)}>Delete</button>
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
            {!isComplete && <span>Please fill incomplete data</span>}
        </section>
    );
}

export function EducationEditSection({ educationDetails, handleChange, addData, handleDelete }: EducationEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const [incompleteDataIndex, setIncompleteDataIndex] = useState(-1);

    function handleAddData() {
        if (educationDetails.length === 0) return addData();

        const incompleteProjectIndex = educationDetails.findIndex(checkIncompleteDetails);
        incompleteProjectIndex > -1? setIncompleteDataIndex(incompleteProjectIndex): addData();
    }

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Education</h3>
            </button>
            <div className="data-editors">
                {
                    educationDetails.length > 0 && educationDetails.map((education, index) => (
                        <EducationEditor 
                            key={education.key} 
                            details={education} 
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

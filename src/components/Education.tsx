import { useState } from "react";
import { TextInput, YearInput } from "./Inputs";
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
    details: Details[];
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
                <h4>{details.school? details.school: 'No School Title'}</h4>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                    <YearInput
                        label='Start Year'
                        name='start-year'
                        value={details.startYear}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startYear', details.key)}
                    />
                </div>
                <div className="input-row">
                    <YearInput
                        label='End Year'
                        name='end-year'
                        value={details.endYear}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endYear', details.key)}
                    />
                </div>
                <div className="data-buttons">
                    <button onClick={() => handleDelete(deleteDetails)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="M6 5h12M9 5v0c1.5769-1.83974 4.4231-1.83974 6 0v0M9 20h6c1.1046 0 2-.8954 2-2V9c0-.55228-.4477-1-1-1H8c-.55228 0-1 .44772-1 1v9c0 1.1046.89543 2 2 2Z" stroke="#000" strokeWidth=".888" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Delete</span>
                    </button>
                    <button onClick={() => setDisplayActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="m8 12 4-4m0 0 4 4m-4-4v12M4 4h16" stroke="#000" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Save</span>
                    </button>
                </div>
            </div>
            {!isComplete && <span className="alert-incomplete">Please fill incomplete data.</span>}
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
                <svg className="section-icon" id="icon-4" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M15 13.5C14.7164 12.3589 13.481 11.5 12 11.5C10.519 11.5 9.28364 12.3589 9 13.5M12 7.5H12.01M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Education</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                {
                    educationDetails.length > 0 && educationDetails.map((education, index) => (
                        <EducationEditor 
                            key={education.key} 
                            details={education} 
                            handleChange={handleChange} 
                            handleDelete={(deleteDetails) => {
                                setIncompleteDataIndex(-1);
                                handleDelete(deleteDetails);
                            }}
                            isComplete={incompleteDataIndex !== index}
                        />
                    ))
                }
                <button className="add-data-btn" onClick={handleAddData}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path
                        d="M16 30C8.268 30 2 23.73 2 16S8.268 2 16 2s14 6.27 14 14-6.268 14-14 14Zm0-30C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Zm6 15h-5v-5c0-.55-.447-1-1-1-.553 0-1 .45-1 1v5h-5c-.553 0-1 .45-1 1s.447 1 1 1h5v5c0 .55.447 1 1 1 .553 0 1-.45 1-1v-5h5c.553 0 1-.45 1-1s-.447-1-1-1Z"
                        fill="#000"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span>Add Education</span>
                </button>
            </div>
        </section>
    );
}

export function CvEducation({details}:CvEducationProps) {
    if (details.length > 0) return (
            <section id="cv-education">
                <h2>Education</h2>
                {details.map(education => (
                    <div className="education-data cv-data" key={education.key}>
                        <h3>{education.school}</h3>
                        <span>{education.field}</span>
                        <span>{education.startYear}</span>
                        <span>{education.endYear}</span>  
                    </div>   
                ))}
            </section>
    );
}

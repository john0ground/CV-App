import { TextInput } from "./Inputs";
export type EducationHandler = (value:string, property: keyof Details, key:string) => void;
export interface Details { 
    school: string,
    field: string,
    startYear: string,
    endYear: string
    key: string
}

interface EducationInputsProps {
    details: Details;
    handleChange: EducationHandler;
}

interface CvEducationProps {
    details: Details
}

export function EducationInputs({ details, handleChange }: EducationInputsProps) {
    return (
        <section className="education-inputs">
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

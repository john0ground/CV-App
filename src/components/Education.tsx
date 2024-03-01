import { TextInput } from "./Inputs";
type ChangeHandler = (value:string, key:string) => void;
interface Details { 
    school: string,
    field: string,
    startYear: string,
    endYear: string
}

interface EducationInputsProps {
    details: Details;
    handleChange: ChangeHandler;
}

interface CvEducationProps {
    details: Details
}

function EducationInputs({ details, handleChange }: EducationInputsProps) {
    return (
        <section className="education-inputs">
            <div className="input-row">
                <TextInput
                    label='School'
                    name='school'
                    value={details.school}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'school')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Field'
                    name='field'
                    value={details.field}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'field')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Start Year'
                    name='start-year'
                    value={details.startYear}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startYear')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='End Year'
                    name='end-year'
                    value={details.endYear}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endYear')}
                />
            </div>
        </section>
    );
}

function CvEducation({ details }: CvEducationProps) {
    return (
        <header>
            <h3>{details.school}</h3>
            <span>{details.field}</span>
            <span>{details.startYear}</span>
            <span>{details.endYear}</span>            
        </header>
    );
}

export { EducationInputs, CvEducation }

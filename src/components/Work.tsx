import { TextInput } from "./Inputs";
export type WorkHandler = (value:string, property: keyof Details, key:string) => void;
export type AddWork = () => void;
export interface Details {
    companyName: string,
    positionTitle: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
    key: string
}

interface WorkInputsProps {
    details: Details;
    handleChange: WorkHandler;
}

interface CvWorkProps {
    details: Details
}

export function WorkInputs({ details, handleChange }: WorkInputsProps) {
    return (
        <section className="work-inputs">
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

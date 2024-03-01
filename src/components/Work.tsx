import { TextInput } from "./Inputs";
type ChangeHandler = (value:string, key:string) => void;
interface Details {
    companyName: string,
    positionTitle: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string
}

interface WorkInputsProps {
    details: Details;
    handleChange: ChangeHandler;
}

interface CvWorkProps {
    details: Details
}

function WorkInputs({ details, handleChange }: WorkInputsProps) {
    return (
        <section className="work-inputs">
            <div className="input-row">
                <TextInput
                    label='Company Name'
                    name='company-name'
                    value={details.companyName}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'companyName')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Position Title'
                    name='position-title'
                    value={details.positionTitle}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'positionTitle')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Start Date'
                    name='start-date'
                    value={details.startDate}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startDate')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='End Date'
                    name='end-date'
                    value={details.endDate}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endDate')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Location'
                    name='location'
                    value={details.location}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'location')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Description'
                    name='description'
                    value={details.description}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description')}
                />
            </div>
        </section>
    );
}

function CvWork({ details }: CvWorkProps) {
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

export { WorkInputs, CvWork }

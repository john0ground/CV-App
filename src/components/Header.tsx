import { TextInput } from "./Inputs";
export type HeaderHandler = (value:string, key:string) => void;
export interface Details { fullName:string, niche:string, key:string }

interface HeaderInputsProps {
    details: Details;
    handleChange: HeaderHandler;
}

interface CvHeaderProps {
    details: Details
}

function HeaderInputs({ details, handleChange }: HeaderInputsProps) {
    return (
        <section className="header-inputs">
            <div className="input-row">
                <TextInput
                    label='Full Name'
                    name='fullName'
                    value={details.fullName}
                    id={details.key}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'fullName')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Niche'
                    name='niche'
                    value={details.niche}
                    id={details.key}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'niche')}
                />
            </div>
        </section>
    );
}

function CvHeader({ details }: CvHeaderProps) {
    return (
        <header>
            <h1>{details.fullName}</h1>
            <span>{details.niche}</span>
        </header>
    );
}

export { HeaderInputs, CvHeader } 

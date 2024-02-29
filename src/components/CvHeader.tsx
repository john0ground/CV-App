import { TextInput } from "./Inputs";
type ChangeHandler = (value:string, key:string) => void;
interface Details { fullName:string, niche:string }

interface HeaderInputsProps {
    details: Details;
    handleChange: ChangeHandler;
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
                    name='input-fullName'
                    value={details.fullName}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'fullName')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Niche'
                    name='input-niche'
                    value={details.niche}
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
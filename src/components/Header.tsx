import { useState } from "react";
import { TextInput } from "./Inputs";
export type HeaderHandler = (value:string, key:string) => void;
export interface Details { fullName:string, niche:string, key:string }

interface HeaderEditorProps {
    details: Details;
    handleChange: HeaderHandler;
}

interface HeaderEditSectionProps {
    headerDetails: Details;
    handleChange: HeaderHandler;
}

interface CvHeaderProps {
    details: Details
}

function HeaderEditor({ details, handleChange }: HeaderEditorProps) {
    return (
        <section className="data-editor">
            <div className="data-inputs">
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
            </div>
        </section>
    );
}

export function HeaderEditSection({ headerDetails, handleChange }: HeaderEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Personal Details</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                <HeaderEditor key={headerDetails.key} details={headerDetails} handleChange={handleChange} />
            </div>
        </section>
    );
}

export function CvHeader({ details }: CvHeaderProps) {
    return (
        <section>
            <h1>{details.fullName}</h1>
            <span>{details.niche}</span>
        </section>
    );
}

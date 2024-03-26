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

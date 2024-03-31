import { useState } from "react";
import { TextInput } from "./Inputs";
export type ContactHandler = (value:string, key:string) => void;
export interface Details { email:string, contactNumber:string, address:string, active:boolean, key:string }

interface ContactEditorProps {
    details: Details;
    handleChange: ContactHandler;
}

interface ContactEditSectionProps {
    contactDetails: Details;
    handleChange: ContactHandler;
}

interface CvContactProps {
    details: Details
}

function ContactEditor({ details, handleChange }: ContactEditorProps) {
    return (
        <section className="data-editor">
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='Email'
                        name='email'
                        value={details.email}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'email')}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Contact Number'
                        name='contactNumber'
                        value={details.contactNumber}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'contactNumber')}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Address'
                        name='address'
                        value={details.address}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'address')}
                    />
                </div>
            </div>
        </section>
    );
}

export function ContactEditSection({ contactDetails, handleChange }: ContactEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Contact Details</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                <ContactEditor key={contactDetails.key} details={contactDetails} handleChange={handleChange} />
            </div>
        </section>
    );
}

export function CvContact( { details }: CvContactProps) {
    return(
        <section>
            <h2>Contact Details</h2>
            <span>{details.email}</span>
            <span>{details.contactNumber}</span>
            <span>{details.address}</span>
        </section>
    );
}

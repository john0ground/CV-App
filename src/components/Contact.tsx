import { useState } from "react";
import { TextInput } from "./Inputs";
export type ContactHandler = (value:string, key:string) => void;
export interface Details { email:string, contactNumber:string, address:string, active:boolean, key:string }

interface ContactInputsProps {
    details: Details;
    handleChange: ContactHandler;
}

interface CvContactProps {
    details: Details
}

export function ContactInputs({ details, handleChange }: ContactInputsProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor" data-active={displayActive}>
            <h3 onClick={() => setDisplayActive(!displayActive)}>Contact Details</h3>
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

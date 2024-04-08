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
        <section className="data-editor single-data-editor">
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
                <svg className="section-icon" id="icon-3" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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

function dataIsEmpty(data:Details) {
    const values = Object.values(data);

    for(let i = 0; i < 3; i++) {
        if (values[i].length > 0) return false;
    }
    return true;
}

export function CvContact( { details }: CvContactProps) {
    return(
        <section id="cv-contact">
            {!dataIsEmpty(details) && <h2>Contact Details</h2>}
            {details.email && (
                <div className="contact-row email">
                    <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                            <path d="m42.686667 114.039333 213.333914 192.00134 213.333086-192.00034.000248 312.632608H42.68724794L42.686667 114.039333Zm394.776-28.7L256.020581 248.624941 74.576667 85.339333h362.886Z" fill="#ffffffd0" strokeWidth=".00512" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <span>{details.email}</span>
                </div>
            )}
            {details.contactNumber && (
                <div className="contact-row contact-number">
                    <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff" stroke="#fff">
                            <path d="m31.073 4.433-2.878-2.87c-.794-.793-2.083-.793-2.878 0L21 7.303c-.659.971-.794 2.077 0 2.87l1.762 1.757c-1.306 1.75-2.874 3.658-4.639 5.418-1.996 1.99-4.216 3.799-6.212 5.285l-1.703-1.697c-.794-.793-1.903-.659-2.878 0l-5.756 4.305c-.965.665-.795 2.077 0 2.87l2.878 2.869c1.59 1.586 3.657 1.078 5.756 0 0 0 6.353-3.556 11.792-8.98 5.116-5.102 9.073-11.827 9.073-11.827.825-2.263 1.59-4.155 0-5.74" fill="#ffffffd0" stroke="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <span>{details.contactNumber}</span>
                </div>
            )}
            {details.address && (
                <div className="contact-row address">
                    <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlSpace="preserve" fill="#fff">
                            <path fill="#ffffffd0" d="M32 0C18.746 0 8 10.746 8 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24C29.414 63.332 30.664 64 32 64s2.586-.668 3.328-1.781l16-24c.059-.09.066-.195.117-.289C54.289 34.008 56 29.219 56 24 56 10.746 45.254 0 32 0zm0 32c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                        </svg>
                    </div>
                    <span>{details.address}</span>
                </div>
            )}
        </section>
    );
}

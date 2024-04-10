import { useState } from "react";
import { TextInput } from "./Inputs";
export type SummaryHandler = (value:string) => void;
export interface Details {
    length: number; summary:string, key:string 
}

interface SummaryEditorProps {
    details: Details;
    handleChange: SummaryHandler;
}

interface SummaryEditSectionProps {
    summaryDetails: Details;
    handleChange: SummaryHandler;
}

interface CvSummaryProps {
    details: Details;
}

function SummaryEditor({ details, handleChange }: SummaryEditorProps) {
    return (
        <section className="data-editor single-data-editor">
            <div className="data-inputs">
                <TextInput
                    label='Summary'
                    name='summary'
                    id={details.key}
                    value={details.summary}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value)}
                />
            </div>
        </section>
    );
}

export function SummaryEditSection({ summaryDetails, handleChange }: SummaryEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <svg className="section-icon" id="icon-6" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <g id="File / Note_Search">
                    <path id="Vector" d="M19 19L16 16M10.0002 20H7.19692C6.07901 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V10.0002M13.5 17C11.567 17 10 15.433 10 13.5C10 11.567 11.567 10 13.5 10C15.433 10 17 11.567 17 13.5C17 15.433 15.433 17 13.5 17Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
                <h3>Summary</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                <SummaryEditor key={summaryDetails.key} details={summaryDetails} handleChange={handleChange} />
            </div>
        </section>
    );
}

export function CvSummary({details}: CvSummaryProps) {
    return (
        <section id="cv-summary">
            {details.summary && (
                <>
                    <h2>Summary</h2>
                    <div className="line-row"></div>
                    <p>{details.summary}</p>
                </>
            )}
        </section>
    );
}

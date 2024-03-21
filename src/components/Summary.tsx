import { useState } from "react";
import { TextInput } from "./Inputs";
export type SummaryHandler = (value:string) => void;
export interface Details { summary:string, key:string }

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
        <section className="data-editor">
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
                <h3>Summary</h3>
            </button>
            <div className="data-editors">
                <SummaryEditor key={summaryDetails.key} details={summaryDetails} handleChange={handleChange} />
            </div>
        </section>
    );
}

export function CvSummary({details}: CvSummaryProps) {
    return (
        <section>
            <p>{details.summary}</p>
        </section>
    );
}

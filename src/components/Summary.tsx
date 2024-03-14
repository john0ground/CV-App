import { TextInput } from "./Inputs";
export type SummaryHandler = (value:string) => void;
export interface Details { summary:string, key:string }

interface SummaryInputsProps {
    details: Details;
    handleChange: SummaryHandler;
}

interface CvSummaryProps {
    details: Details;
}

export function SummaryInput({ details, handleChange }: SummaryInputsProps) {
    return (
        <section className="summary-input">
            <TextInput
                label='Summary'
                name='summary'
                id={details.key}
                value={details.summary}
                onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value)}
            />
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

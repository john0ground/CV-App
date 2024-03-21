import { useState } from "react";
import {v4 as uuid} from "uuid";

import { TextInput } from "./Inputs";
export type AddSkill = (inputData:string) => void;
export interface Details {
    skill:string;
    key: string;
}

interface SkillEditorProps {
    addSkill: AddSkill;
}

interface SkillEditSectionProps {
    addData: AddSkill;
}

interface CvSkillProps {
    details: Details;
}

function SkillEditor({ addSkill }: SkillEditorProps) {
    const [inputData, setInputData] = useState('');

    function handleAddSkill() {
        if (inputData.length < 1) return;
        addSkill(inputData);
        setInputData('');
    }

    return (
        <section className="data-editor">
            <div className="data-inputs">
                <TextInput
                    label='Skill'
                    name='skill'
                    id={uuid()}
                    value={inputData}
                    onChange={(e: { target: { value: string; }; }) => setInputData(e.target.value)}
                />
            </div>
            <button onClick={handleAddSkill}>Add Skill</button>
        </section>
    );
}

export function SkillEditSection({ addData }: SkillEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Skills</h3>
            </button>
            <div className="data-editors">
                <SkillEditor addSkill={addData} />
            </div>
        </section>
    );
}

export function CvSkill({details}: CvSkillProps) {
    return (
        <section>
            <span>{ details.skill }</span>
        </section>
    );
}

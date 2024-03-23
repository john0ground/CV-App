import { useState } from "react";
import {v4 as uuid} from "uuid";

import { TextInput } from "./Inputs";
export type AddSkill = (inputData:string) => void;
export type DeleteSkill = (key:string) => void;

export interface Details {
    skill:string;
    key: string;
}

interface SkillEditorProps {
    addSkill: AddSkill;
    // handleDelete: DeleteProject;
}

interface SkillEditSectionProps {
    addData: AddSkill;
    skillDetails: Details[];
    handleDelete: DeleteSkill;
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

export function SkillEditSection({ addData, skillDetails, handleDelete }: SkillEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Skills</h3>
            </button>
            <div className="data-editors">
                <SkillEditor addSkill={addData} />
            </div>
            <ul>
                {skillDetails.map(data => (
                    <li key={data.key}>
                        <span>{data.skill}</span>
                        <button onClick={() => handleDelete(data.key)}>Delete</button>
                    </li>
                ))}
            </ul>
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

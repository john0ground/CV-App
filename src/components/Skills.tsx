import { useState } from "react";
import {v4 as uuid} from "uuid";

import { TextInput } from "./Inputs";
export type AddSkill = (inputData:string) => void;
export interface Details {
    skill:string;
    key: string;
}

interface SkillInputProps {
    addSkill: AddSkill;
}

interface CvSkillProps {
    details: Details;
}

export function SkillInput({ addSkill }:SkillInputProps) {
    const [inputData, setInputData] = useState('');

    function handleAddSkill() {
        if (inputData.length < 1) return;
        addSkill(inputData);
        setInputData('');
    }

    return (
        <section className="skill-input">
            <TextInput
                label='Skill'
                name='skill'
                id={uuid()}
                value={inputData}
                onChange={(e: { target: { value: string; }; }) => setInputData(e.target.value)}
            />
            <button onClick={handleAddSkill}>Add Skill</button>
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

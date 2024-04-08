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
    skillDetails: Details[];
    handleDelete: DeleteSkill;
}

interface SkillEditSectionProps {
    addData: AddSkill;
    skillDetails: Details[];
    handleDelete: DeleteSkill;
}

interface CvSkillProps {
    details: Details[];
}

function SkillEditor({ addSkill, skillDetails, handleDelete }: SkillEditorProps) {
    const [inputData, setInputData] = useState('');

    function handleAddSkill() {
        if (inputData.length < 1) return;
        addSkill(inputData);
        setInputData('');
    }

    return (
        <section className="data-editor single-data-editor" id="data-editor-skills">
            <div className="data-inputs">
                <TextInput
                    label='Skill'
                    name='skill'
                    id={uuid()}
                    value={inputData}
                    onChange={(e: { target: { value: string; }; }) => setInputData(e.target.value)}
                />
            </div>
            <button className="add-data-btn" onClick={handleAddSkill}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M16 30C8.268 30 2 23.73 2 16S8.268 2 16 2s14 6.27 14 14-6.268 14-14 14Zm0-30C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Zm6 15h-5v-5c0-.55-.447-1-1-1-.553 0-1 .45-1 1v5h-5c-.553 0-1 .45-1 1s.447 1 1 1h5v5c0 .55.447 1 1 1 .553 0 1-.45 1-1v-5h5c.553 0 1-.45 1-1s-.447-1-1-1Z"
                    fill="#000"
                    fillRule="evenodd"
                  />
                </svg>
                <span>Add Skill</span>
            </button>
            <ul>
                {skillDetails.map(data => (
                    <li key={data.key}>
                        <span>{data.skill}</span>
                        <button onClick={() => handleDelete(data.key)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                              <path d="M6 5h12M9 5v0c1.5769-1.83974 4.4231-1.83974 6 0v0M9 20h6c1.1046 0 2-.8954 2-2V9c0-.55228-.4477-1-1-1H8c-.55228 0-1 .44772-1 1v9c0 1.1046.89543 2 2 2Z" stroke="#000" strokeWidth=".888" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function SkillEditSection({ addData, skillDetails, handleDelete }: SkillEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <svg className="section-icon" id="icon-5" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12H15" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H15" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx={9} cy={12} r={1} fill="#000000" />
                  <circle cx={9} cy={16} r={1} fill="#000000" />
                </svg>
                <h3>Skills</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                <SkillEditor addSkill={addData} skillDetails={skillDetails} handleDelete={handleDelete} />
            </div>
        </section>
    );
}

export function CvSkill({details}: CvSkillProps) {
    if (details.length > 0) return (
        <section id="cv-skills">
            <h2>Skills</h2>
            {details.map(skill => (
                <div className="skills-data cv-data" key={skill.key}>
                    <span>{ skill.skill }</span>
                </div>
            ))}
        </section>
    );
}
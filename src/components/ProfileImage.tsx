import { useState } from "react";
import { FileInput } from "./Inputs";
import { v4 as uuid } from "uuid";

function ProfileImageEditor({ handleChange }) {
    return (
        <section className="data-editor">
            <div className="data-inputs">
                <div className="input-row">
                    <FileInput
                        label='Add Profile Image'
                        name='profile-image'
                        id={uuid()}
                        onChange={(e) => handleChange(e.target.files[0])}
                    />
                </div>
            </div>
        </section>
    );
}

export function ProfileImageEditSection({ handleChange }) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Profile Image</h3>
            </button>
            <div className="data-editors">
                <ProfileImageEditor handleChange={handleChange}/>
            </div>
        </section>
    );
}

export function CvProfileImage({ imgSrc }) {
    return (
            <img width="80px" height="80px" src={imgSrc} alt="profile-image" />
    );
}
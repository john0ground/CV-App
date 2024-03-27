import { useState } from "react";
import { FileInput } from "./Inputs";
import { v4 as uuid } from "uuid";

export type AddProfileImage = (imgFile:File) => void;

interface ProfileImageEditorProps {
    addPhoto: AddProfileImage;
    imgSrc: string;
}

interface ProfileImageEditSectionProps {
    addPhoto: AddProfileImage;
    imgSrc: string;
}

interface CvProfileImageProps {
    imgSrc: string;
}

function ProfileImageEditor({ addPhoto, imgSrc }: ProfileImageEditorProps) {
    return (
        <section className="data-editor">
            <img width="80px" height="80px" src={imgSrc} alt="profile-image" />
            <div className="data-inputs">
                <div className="input-row">
                    <FileInput
                        label='Add Profile Image'
                        name='profile-image'
                        id={uuid()}
                        onChange={(e) => {
                            if (e.target.files) addPhoto(e.target.files[0]);
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export function ProfileImageEditSection({ addPhoto, imgSrc }: ProfileImageEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Profile Image</h3>
            </button>
            <div className="data-editors">
                <ProfileImageEditor addPhoto={addPhoto} imgSrc={imgSrc}/>
            </div>
        </section>
    );
}

export function CvProfileImage({ imgSrc }: CvProfileImageProps) {
    return (
            <img width="80px" height="80px" src={imgSrc} alt="profile-image" />
    );
}
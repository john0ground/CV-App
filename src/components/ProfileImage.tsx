import { useState } from "react";
import { FileInput } from "./Inputs";
import { v4 as uuid } from "uuid";

export type AddProfileImage = (imgFile:File) => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteImage = (details:DeleteProps) => void;

interface ProfileImageEditorProps {
    addPhoto: AddProfileImage;
    handleDelete: DeleteImage;
    imgSrc: string;
}

interface ProfileImageEditSectionProps {
    addPhoto: AddProfileImage;
    handleDelete: DeleteImage;
    imgSrc: string;
}

interface CvProfileImageProps {
    imgSrc: string;
}

function ProfileImageEditor({ addPhoto, handleDelete, imgSrc }: ProfileImageEditorProps) {
    const deleteDetails = {
        key: '',
        section: 'Profile Image',
        data: imgSrc
    }

    return (
        <section className="data-editor">
            <img width="80px" height="80px" src={imgSrc} alt="profile-image" />
            {imgSrc && <button onClick={() => handleDelete(deleteDetails)}>Remove Image</button>}
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

export function ProfileImageEditSection({ addPhoto, imgSrc, handleDelete }: ProfileImageEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>Profile Image</h3>
            </button>
            <div className="data-editors">
                <ProfileImageEditor handleDelete={handleDelete} addPhoto={addPhoto} imgSrc={imgSrc}/>
            </div>
        </section>
    );
}

export function CvProfileImage({ imgSrc }: CvProfileImageProps) {
    return (
            <img width="80px" height="80px" src={imgSrc} alt="profile-image" />
    );
}
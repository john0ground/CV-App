import { useState } from "react";
import { TextInput } from "./Inputs";
export type ProjectHandler = (value:string, property: keyof Details, key:string) => void;
export type AddProject = () => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteProject = (details:DeleteProps) => void;
export interface Details { project:string, description:string, key:string }

interface ProjectEditorProps {
    details: Details;
    handleChange: ProjectHandler;
    handleDelete: DeleteProject;
    isComplete: boolean;
}

interface ProjectEditSectionProps {
    projectDetails: Details[];
    handleChange: ProjectHandler;
    addData: AddProject;
    handleDelete: DeleteProject;
}

interface CvProjectProps {
    details: Details
}

function checkIncompleteDetails(details:Details) {
    let incomplete = false;
    Object.values(details).forEach(value => {
        if (value.length === 0) incomplete = true;
    });

    return incomplete;
}

function ProjectEditor({details, handleChange, handleDelete, isComplete}: ProjectEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const deleteDetails = {
        key: details.key,
        section: 'Project',
        data: details.project
    }

    if (!checkIncompleteDetails(details)) isComplete = true;

    return (
        <section className="data-editor" data-active={displayActive} data-complete={isComplete}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h4>{details.project? details.project: 'No project title'}</h4>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='Project'
                        name='project'
                        value={ details.project }
                        id = { details.key }
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'project', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Description'
                        name='project-description'
                        value = { details.description } 
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description', details.key)}
                    />
                </div>
                <div className="data-buttons">
                    <button onClick={() => handleDelete(deleteDetails)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="M6 5h12M9 5v0c1.5769-1.83974 4.4231-1.83974 6 0v0M9 20h6c1.1046 0 2-.8954 2-2V9c0-.55228-.4477-1-1-1H8c-.55228 0-1 .44772-1 1v9c0 1.1046.89543 2 2 2Z" stroke="#000" strokeWidth=".888" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Delete</span>
                    </button>
                    <button onClick={() => setDisplayActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="m8 12 4-4m0 0 4 4m-4-4v12M4 4h16" stroke="#000" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Save</span>
                    </button>
                </div>
            </div>
            {!isComplete && <span className="alert-incomplete">Please fill incomplete data.</span>}
        </section>
    );
}

export function ProjectEditSection({ projectDetails, handleChange, addData, handleDelete }: ProjectEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const [incompleteDataIndex, setIncompleteDataIndex] = useState(-1);

    function handleAddData() {
        if (projectDetails.length === 0) return addData();

        const incompleteProjectIndex = projectDetails.findIndex(checkIncompleteDetails);
        incompleteProjectIndex > -1? setIncompleteDataIndex(incompleteProjectIndex): addData();
    }

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <svg className="section-icon" id="icon-8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000" height="800px" width="800px" version="1.1" viewBox="0 0 360.844 360.844" xmlSpace="preserve">
                  <g id="XMLID_71_">
                    <path id="XMLID_85_" d="M282.205,133.545l10.606,10.606c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.464,10.606-4.394   l42.427-42.427c2.813-2.813,4.394-6.628,4.394-10.606c0-3.979-1.58-7.794-4.394-10.607l-42.427-42.426   c-5.857-5.857-15.355-5.857-21.213,0l-42.427,42.426c-2.813,2.813-4.394,6.628-4.394,10.607c0,3.978,1.58,7.793,4.394,10.606   l10.607,10.607l-42.428,42.428l-11.437-11.438c8.505-35.427-1.776-72.486-27.898-98.607C147.817,13.302,99.789,5.056,59.717,24.198   c-4.394,2.099-7.496,6.2-8.319,10.999c-0.823,4.799,0.734,9.7,4.178,13.143l49.407,49.408L83.77,118.961L34.362,69.553   c-3.443-3.442-8.343-5.001-13.143-4.177c-4.799,0.824-8.9,3.925-10.999,8.319c-19.14,40.072-10.894,88.101,20.517,119.512   c17.296,17.297,39.388,27.634,62.624,30.186l-29.608,29.608c-21.445,21.446-21.444,56.34,0,77.784   c10.723,10.723,24.804,16.084,38.889,16.083c14.082-0.001,28.169-5.362,38.89-16.083l48.747-48.746l48.746,48.747   c10.723,10.721,24.806,16.082,38.89,16.082c14.085,0,28.17-5.362,38.892-16.084c10.388-10.387,16.108-24.199,16.108-38.89   c0.001-14.691-5.72-28.502-16.107-38.888l-59.33-59.331c-0.008-0.008-0.014-0.017-0.021-0.024   c-0.008-0.008-0.017-0.014-0.024-0.022l-17.655-17.656L282.205,133.545z M303.418,69.905l21.214,21.213l-21.214,21.213   l-21.214-21.213L303.418,69.905z M51.95,171.994c-16.961-16.961-24.467-40.703-21.218-63.644l42.432,42.431   c5.857,5.857,15.355,5.858,21.213-0.001l42.426-42.426c5.858-5.857,5.858-15.355,0-21.213L94.371,44.709   c22.938-3.25,46.685,4.259,63.646,21.219c19.479,19.479,26.615,47.473,19.036,73.774l-51.331,51.331   C99.423,198.611,71.429,191.474,51.95,171.994z M120.32,309.572c-9.747,9.747-25.606,9.747-35.353,0   c-9.749-9.748-9.749-25.609,0-35.358L190.28,168.901l35.356,35.357l-45.902,45.901c-0.021,0.02-0.043,0.037-0.064,0.058   c-0.02,0.02-0.037,0.043-0.058,0.064L120.32,309.572z M302.916,291.893c0,6.678-2.6,12.956-7.321,17.678   c-9.747,9.746-25.609,9.747-35.356,0.001l-48.745-48.746l35.356-35.355l48.747,48.748   C300.316,278.939,302.916,285.216,302.916,291.893z"/>
                  </g>
                </svg>
                <h3>Projects</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                {
                    projectDetails.length > 0 && projectDetails.map((proj, index) => (
                        <ProjectEditor 
                            key={proj.key} 
                            details={proj} 
                            handleChange={handleChange} 
                            handleDelete={handleDelete}
                            isComplete={incompleteDataIndex !== index}
                        />
                    ))
                }
                <button className="add-data-btn" onClick={handleAddData}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path
                        d="M16 30C8.268 30 2 23.73 2 16S8.268 2 16 2s14 6.27 14 14-6.268 14-14 14Zm0-30C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Zm6 15h-5v-5c0-.55-.447-1-1-1-.553 0-1 .45-1 1v5h-5c-.553 0-1 .45-1 1s.447 1 1 1h5v5c0 .55.447 1 1 1 .553 0 1-.45 1-1v-5h5c.553 0 1-.45 1-1s-.447-1-1-1Z"
                        fill="#000"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span>Add Project</span>
                </button>
            </div>
        </section>
    );
}

export function CvProject({ details }: CvProjectProps) {
    return (
        <section>
            <h3>{details.project}</h3>
            <p>{details.description}</p>
        </section>
    );
}

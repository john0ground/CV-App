import { useState } from "react";
import { TextInput, YearInput } from "./Inputs";
export type WorkHandler = (value:string, property: keyof Details, key:string) => void;
export type AddWork = () => void;
export interface DeleteProps { key:string, section:string, data:string }
type DeleteWork = (details:DeleteProps) => void;

export interface Details {
    companyName: string,
    positionTitle: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
    key: string
}

interface WorkEditorProps {
    details: Details;
    handleChange: WorkHandler;
    handleDelete: DeleteWork;
    isComplete: boolean;
}

interface WorkEditSectionProps {
    workDetails: Details[];
    handleChange: WorkHandler;
    addData: AddWork;
    handleDelete: DeleteWork;
}

interface CvWorkProps {
    details: Details
}

function checkIncompleteDetails(details:Details) {
    let incomplete = false;
    Object.values(details).forEach(value => {
        if (value.length === 0) incomplete = true;
    });

    return incomplete;
}

function WorkEditor({ details, handleChange, handleDelete, isComplete }: WorkEditorProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const deleteDetails = {
        key: details.key,
        section: 'Work Experience',
        data: details.positionTitle
    }

    if (!checkIncompleteDetails(details)) isComplete = true;

    return (
        <section className="data-editor" data-active={displayActive} data-complete={isComplete}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <h3>{details.positionTitle? details.positionTitle: 'No Work Title'}</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-inputs">
                <div className="input-row">
                    <TextInput
                        label='Company Name'    
                        name='company-name'
                        value={details.companyName}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'companyName', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Position Title'
                        name='position-title'
                        value={details.positionTitle}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'positionTitle', details.key)}
                    />
                </div>
                <div className="input-row">
                    <YearInput
                        label='Start Date'
                        name='start-date'
                        value={details.startDate}
                        id={details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'startDate', details.key)}
                    />
                </div>
                <div className="input-row">
                    <YearInput
                        label='End Date'
                        name='end-date'
                        value={details.endDate}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'endDate', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Location'
                        name='location'
                        value={details.location}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'location', details.key)}
                    />
                </div>
                <div className="input-row">
                    <TextInput
                        label='Description'
                        name='description'
                        value={details.description}
                        id = {details.key}
                        onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'description', details.key)}
                    />
                </div>
                <div className="data-buttons">
                    <button onClick={() => setDisplayActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="m8 12 4-4m0 0 4 4m-4-4v12M4 4h16" stroke="#000" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Save</span>
                    </button>
                    <button onClick={() => handleDelete(deleteDetails)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <path d="M6 5h12M9 5v0c1.5769-1.83974 4.4231-1.83974 6 0v0M9 20h6c1.1046 0 2-.8954 2-2V9c0-.55228-.4477-1-1-1H8c-.55228 0-1 .44772-1 1v9c0 1.1046.89543 2 2 2Z" stroke="#000" strokeWidth=".888" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
            {!isComplete && <span>Please fill incomplete data</span>}
        </section>
    );
}

export function WorkEditSection({ workDetails, handleChange, addData, handleDelete }: WorkEditSectionProps) {
    const [displayActive, setDisplayActive] = useState(false);
    const [incompleteDataIndex, setIncompleteDataIndex] = useState(-1);

    function handleAddData() {
        if (workDetails.length === 0) return addData();

        const incompleteProjectIndex = workDetails.findIndex(checkIncompleteDetails);
        incompleteProjectIndex > -1? setIncompleteDataIndex(incompleteProjectIndex): addData();
    }

    return (
        <section className="data-editor-section" data-active={displayActive}>
            <button className="data-expand-btn" onClick={() => setDisplayActive(!displayActive)}>
                <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 6.5c0 3.03757-2.2386 5.5-5 5.5-2.76142 0-5-2.46243-5-5.5S9.23858 1 12 1c2.7614 0 5 2.46243 5 5.5Zm-8 0c0 1.82254 1.3431 3.3 3 3.3s3-1.47746 3-3.3c0-1.82254-1.3431-3.3-3-3.3S9 4.67746 9 6.5ZM11.6759 14.9952c-.8891-.0273-1.4814-.1675-1.94981-.3505-.46254-.1807-.82787-.4077-1.30924-.7069-.09389-.0583-.19237-.1195-.29666-.1835-1.04432-.6411-2.38555-.4921-3.25604.3876-.37972.3837-.82379.88-1.17925 1.4207C3.34603 16.0781 3 16.7638 3 17.5v2.5003C3 21.6574 4.34334 23 6 23h7.101c-.5859-.5741-1.0713-1.2504-1.4274-2H6c-.55248 0-1-.4476-1-.9997V17.5c0-.1451.08549-.427.35613-.8387.25404-.3865.59745-.7769.92966-1.1126.20833-.2106.52527-.2513.7881-.0899.08272.0507.16698.1033.25305.1571.48244.3012 1.02224.6381 1.67142.8917.58925.2302 1.25354.3898 2.07774.4569.103-.695.3082-1.3567.5998-1.9693ZM15.2929 17.7071c.3905-.3905 1.0237-.3905 1.4142 0l.6412.6412 1.899-1.8991c.3906-.3906 1.0237-.3906 1.4143 0 .3905.3905.3905 1.0237 0 1.4142l-2.5403 2.5402c-.0864.0865-.1848.1538-.2897.202-.383.2238-.8829.1715-1.2113-.1569l-1.3274-1.3274c-.3905-.3905-.3905-1.0237 0-1.4142Z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M24 18c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6 2.6863-6 6-6 6 2.6863 6 6Zm-10.0181 0c0 2.2191 1.799 4.0181 4.0181 4.0181 2.2191 0 4.0181-1.799 4.0181-4.0181 0-2.2191-1.799-4.0181-4.0181-4.0181-2.2191 0-4.0181 1.799-4.0181 4.0181Z"
                    fill="#0F0F0F"
                  />
                </svg>
                <h3>Work Experience</h3>
                <svg className="expand-icon" data-active={displayActive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="m10 7 5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="data-editors">
                {
                    workDetails.length > 0 && workDetails.map((work, index) => (
                        <WorkEditor 
                            key={work.key} 
                            details={work} 
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
                    <span>Add Experience</span>
                </button>
            </div>
        </section>
    );
}

export function CvWork({ details }: CvWorkProps) {
    return (
        <section>
            <span>{ details.companyName }</span>
            <span>{ details.positionTitle }</span>
            <span>{ details.startDate }</span>
            <span>{ details.endDate }</span>
            <span>{ details.location }</span>
            <span>{ details.description }</span>
        </section>
    );
}

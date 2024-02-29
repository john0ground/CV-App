import { TextInput } from "./Inputs";
type ChangeHandler = (value:string, key:string) => void;
interface Details { email:string, contactNumber:string, address:string }

interface ContactInputsProps {
    details: Details;
    handleChange: ChangeHandler;
}

interface CvContactProps {
    details: Details
}

function ContactInputs({ details, handleChange }: ContactInputsProps) {
    return (
        <section className="contact-inputs">
            <div className="input-row">
                <TextInput
                    label='Email'
                    name='email'
                    value={details.email}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'email')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Contact Number'
                    name='contactNumber'
                    value={details.contactNumber}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'contactNumber')}
                />
            </div>
            <div className="input-row">
                <TextInput
                    label='Address'
                    name='address'
                    value={details.address}
                    onChange={(e: { target: { value: string; }; }) => handleChange(e.target.value, 'address')}
                />
            </div>
        </section>
    );
}


function CvContact( { details }: CvContactProps) {
    return(
        <section>
            <span>{details.email}</span>
            <span>{details.contactNumber}</span>
            <span>{details.address}</span>
        </section>
    );
}

export { ContactInputs, CvContact }

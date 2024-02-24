import TextInput from "./TextInput";
import { useState } from "react";
interface ContactDetailsProps { email:string, contactNumber:string, address:string}

function ContactSection({email, contactNumber, address}: ContactDetailsProps) {
    return(
        <section>
            <span>{email}</span>
            <span>{contactNumber}</span>
            <span>{address}</span>
        </section>
    );
}

export default function ContactDetails() {
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');


    function handleEmail(value:string) {
        setEmail(value);
    }

    function handleContactNum(value:string) {
        setContactNumber(value);
    }

    function handleAddress(value:string) {
        setAddress(value);
    }

    return (
        <>
            <TextInput
                value={email}
                onChange={(e: { target: { value: string; }; }) => handleEmail(e.target.value)}
            />
            <TextInput
                value={contactNumber}
                onChange={(e: { target: { value: string; }; }) => handleContactNum(e.target.value)}
            />
            <TextInput
                value={address}
                onChange={(e: { target: { value: string; }; }) => handleAddress(e.target.value)}
            />
            <ContactSection
                email={email}
                contactNumber={contactNumber}
                address={address}
            />
        </>
    );
}
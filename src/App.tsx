import { TextInput } from './components/Inputs';
import { useState } from 'react';
import './style/style.scss';

export default function App() {
    const [headerDetails, setHeaderDetails] = useState({fullName: '', niche: ''});
    const [contactDetails, setContactDetails] = useState({email:'', contactNumber:'', address:''});

    function handleHeaderDetails(value:string, key:string) {
        setHeaderDetails(prevDetails => ({ ...prevDetails, [key]:value}));
    }

    function handleContactDetails(value:string, key:string) {
        setContactDetails(prevDetails => ({ ...prevDetails, [key]:value }));
    } 

    return (
        <>
            <div className='editor'>
            <section className="header-inputs">
            <TextInput
                name='Full-name'
                value={headerDetails.fullName}
                onChange={(e: { target: { value: string; }; }) => handleHeaderDetails(e.target.value, 'fullName')}
            />
            <TextInput
                name='Niche'
                value={headerDetails.niche}
                onChange={(e: { target: { value: string; }; }) => handleHeaderDetails(e.target.value, 'niche')}
            />
            </section>

            <section className="contact-inputs">
                <TextInput
                    name='Email'
                    value={contactDetails.email}
                    onChange={(e: { target: { value: string; }; }) => handleContactDetails(e.target.value, 'email')}
                />
                <TextInput
                    name='Contact Number'
                    value={contactDetails.contactNumber}
                    onChange={(e: { target: { value: string; }; }) => handleContactDetails(e.target.value, 'contactNumber')}
                />
                <TextInput
                    name='Address'
                    value={contactDetails.address}
                    onChange={(e: { target: { value: string; }; }) => handleContactDetails(e.target.value, 'address')}
                />
            </section>
            </div>

            <div className='content'>
                <h2>{headerDetails.fullName}</h2>
                <span>{headerDetails.niche}</span>

                <span>{contactDetails.email}</span>
                <span>{contactDetails.contactNumber}</span>
                <span>{contactDetails.address}</span>
            </div>
        </>
    );
}
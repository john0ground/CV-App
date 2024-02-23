interface PersonalDetailsProps { fullName:string, niche:string}
interface ContactDetailsProps {email:string, contactNumber:string, address:string}

function PersonalDetails({fullName, niche}: PersonalDetailsProps) {
    return(
        <section>
            <h2>{fullName}</h2>
            <span>{niche}</span>
        </section>
    );
}

function ContactDetails({email, contactNumber, address}: ContactDetailsProps) {
    return (
        <section>
            <span>{email}</span>
            <span>{contactNumber}</span>
            <span>{address}</span>
        </section>
    );
}

export default function App() {

    return (
        <div>  
            <PersonalDetails fullName="Jonathan" niche="developer" />
            <ContactDetails 
                email="myaddress@gmail.com"
                contactNumber="123-345-679"
                address="Nuuk, Greenland"
            />
        </div>
    );
}

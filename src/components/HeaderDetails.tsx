import TextInput from "./TextInput";
import { useState } from "react";
interface PersonalDetailsProps { fullName:string, niche:string}

function HeaderSection({fullName, niche}: PersonalDetailsProps) {
    return(
        <section>
            <h2>{fullName}</h2>
            <span>{niche}</span>
        </section>
    );
}

export default function HeaderDetails() {
    const [fullName, setFullName] = useState('');
    const [niche, setNiche] = useState('');

    function handleFullName(value:string) {
        setFullName(value);
    }

    function handleNiche(value:string) {
        setNiche(value);
    }

    return (
        <>
            <TextInput
                value={fullName}
                onChange={(e: { target: { value: string; }; }) => handleFullName(e.target.value)}
            />
            <TextInput
                value={niche}
                onChange={(e: { target: { value: string; }; }) => handleNiche(e.target.value)}
            />
            <HeaderSection
                fullName={fullName}
                niche={niche}
            />
        </>
    );
}
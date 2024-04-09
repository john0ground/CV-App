import { ChangeEvent } from "react";

interface InputProps {
    label: string;
    name: string;
    value: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FileInputProps {
    label: string;
    name: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({label, name, value, id, onChange}: InputProps) {
    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="text" 
                name={name} 
                id={name + '-' + id}
                value={value} 
                onChange={ onChange }
            />
        </>
    );
}

function YearInput({label, name, value, id, onChange}: InputProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        if (value.length > 4) return;
        onChange(e);
    }

    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="number" 
                name={name} 
                id={name + '-' + id}
                value={value}
                onChange={ (e) => handleChange(e) }
            />
        </>
    );
}


function DateInput({label, name, value, id, onChange}: InputProps) {
    const getLastChar = (value:string) => value.charAt(value.length - 1);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        const lastChar = getLastChar(value);
        const pattern = /^[0-9/]*$/;
        if (!pattern.test(lastChar)) return;

        if (value.length === 2) e.target.value += '/';
        onChange(e);
    }

    function handleDelete(e) {
        if (e.keyCode !== 8) return;

        const value = e.target.value;
        if (getLastChar(value) === '/') e.target.value = '';

        onChange(e);
    }

    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="text" 
                maxLength={7}
                name={name}
                id={name + '-' + id}
                value={value}
                onChange={ (e) => handleChange(e) }
                onKeyDown={(e) => handleDelete(e) }
            />
        </>
    );
}

function FileInput({label, name, id, onChange}: FileInputProps) {
    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="file"
                name={name} 
                id={name + '-' + id}
                onChange={ onChange }
            />
        </>
    );
}

export { TextInput, YearInput, DateInput, FileInput }

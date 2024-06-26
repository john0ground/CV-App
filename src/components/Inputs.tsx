import { ChangeEvent, useState } from "react";

interface InputProps {
    label: string;
    name: string;
    value: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
    label: string;
    name: string;
    value: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface DateInputProps {
    label: string;
    name: string;
    value: string;
    id: string;
    endDate: boolean;
    onChange: (value:string) => void;
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
                placeholder="yyyy"
                id={name + '-' + id}
                value={value}
                onChange={ (e) => handleChange(e) }
            />
        </>
    );
}


function DateInput({label, name, value, id, endDate, onChange}: DateInputProps) {
    const [presentDateStatus, setPresentDateStatus] = useState(false);

    const getLastChar = (value:string) => value.charAt(value.length - 1);

    function handleChange(value:string) {
        let newValue = value;

        if (presentDateStatus) {
            newValue = 'present';
        } else {
            const lastChar = getLastChar(newValue);
            const pattern = /^[0-9/]*$/;
            if (!pattern.test(lastChar)) return;

            if (newValue.length === 2) newValue += '/';
        }
        
        onChange(newValue);
    }

    function handleDelete(e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e);
        if (e.code !== "Backspace" || presentDateStatus) return;
    
        const target = e.target as HTMLInputElement;
        let value = target.value;
        if (getLastChar(value) === '/') value = '';
        onChange(value);
    }

    function togglePresentDateStatus() {
        setPresentDateStatus(!presentDateStatus);
        presentDateStatus? onChange(''): onChange('present');
    }

    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="text" 
                maxLength={7}
                placeholder="mm/yyyy"
                name={name}
                id={name + '-' + id}
                value={value}
                onChange={ (e) => handleChange(e.target.value) }
                onKeyDown={(e) => handleDelete(e) }
            />
            {endDate && (
                <button onClick={togglePresentDateStatus}>{presentDateStatus? 'input date': 'set present'}</button>
            )}
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

function TextArea({label, name, value, id, onChange}: TextAreaProps) {
    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <textarea
                name={name} 
                id={name + '-' + id}
                value={value}
                onChange={ onChange }
            ></textarea>
        </>
    );
}

export { TextInput, YearInput, DateInput, FileInput, TextArea }

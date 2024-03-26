interface InputProps {
    label: string;
    name: string;
    value: string;
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

function NumberInput({label, name, id, onChange}: InputProps) {
    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="number" 
                name={name} 
                id={name + '-' + id}
                onChange={ onChange }
            />
        </>
    );
}

function FileInput({label, name, value, id, onChange}: InputProps) {
    return (
        <>
            <label htmlFor={name + '-' + id}>{label}</label>
            <input 
                type="file"
                name={name} 
                id={name + '-' + id}
                value={value} 
                onChange={ onChange }
            />
        </>
    );
}

export { TextInput, NumberInput, FileInput }

interface InputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({label, name, value, onChange}: InputProps) {
    return (
        <>
            <label htmlFor={'input-' + name}>{label}</label>
            <input 
                type="text" 
                name={name} 
                id={'input-' + name}
                value={value} 
                onChange={ onChange }
            />
        </>
    );
}

export { TextInput }

//  id for

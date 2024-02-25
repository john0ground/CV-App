function TextInput({name, value, onChange}) {
    return (
        <label>
        {name}
        <input 
            type="text" 
            value={value}
            onChange={onChange}
        />
        </label>
    );
}

export { TextInput }
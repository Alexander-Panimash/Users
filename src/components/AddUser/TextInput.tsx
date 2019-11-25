import React, {createRef} from 'react';

interface IInput {
    name: string,
    placeholder: string,
    styles?: string,
    value?: any,
    onChange?: any,
    storeName?: string,
    disabled?: boolean
    defaultValue?: any
}

const TextInput: React.FC<IInput> = (props: IInput) => {

    const textInput = createRef<HTMLInputElement>();

    function onChange() {
        if (textInput.current !== null) {
            props.onChange(props.storeName, textInput.current.value)
        }
    }

    return (
        <div className={`${props.styles ? props.styles : 'col-md-4 mb-3'} `}>
            <label>{props.name}</label>
            <input defaultValue={props.defaultValue} ref={textInput} type='text' className="form-control"
                   placeholder={props.placeholder}
                   required value={props.value} onChange={onChange} disabled={props.disabled}
            />
        </div>)

};

export default TextInput;

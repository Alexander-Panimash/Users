import React, {createRef} from 'react';

interface IInput {
    name: string,
    placeholder: string,
    styles?: string,
    value?: any,
    onChange?: any,
    stateName?: string,
    disabled?: boolean
}

const TextInput: React.FC<IInput> = (props: IInput) => {
    const textInput = createRef<HTMLInputElement>();
    function onChange (){
        if (textInput.current !== null){
            props.onChange(props.stateName,textInput.current.value);
        }
    }

    return (
        <div  className={`${props.styles? props.styles:'col-md-4 mb-3'} `}>
            <label>{props.name}</label>
            <input ref={textInput} type='text' className="form-control" placeholder={props.placeholder}
                   required value={props.value} onChange={onChange} disabled={props.disabled}/>
        </div>)

};

export default TextInput;

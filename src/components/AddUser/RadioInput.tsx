import React, {createRef} from 'react';

interface ICheckInput {
    name: string,
    stateName: string,
    value1name?: string
    value2name?: string,
    onChange?: any
    disabled?:boolean
}

const RadioInput: React.FC<ICheckInput> = (props: ICheckInput) => {
        const checkInputMale = createRef<HTMLInputElement>();
        const checkInputFemale = createRef<HTMLInputElement>();

        function onChange() {
            if (checkInputMale.current !== null && checkInputFemale.current !== null) {
                if (checkInputMale.current.checked) {
                    props.onChange(props.stateName, 'male')
                } else if (checkInputFemale.current.checked) {
                    props.onChange(props.stateName, 'female')
                }
            }
        }

        return (
            <div className="col-md-4 mb-3">
                <label>{props.name} </label>
                <div className="form-group">
                    <label className='p-1'>
                        <input ref={checkInputMale} type="radio" name="gender" onClick={onChange} disabled={props.disabled}/> {props.value1name}
                    </label>
                    <label className='p-1'>
                        <input ref={checkInputFemale} type="radio" name="gender" onClick={onChange} disabled={props.disabled}/> {props.value2name}
                    </label>
                </div>
            </div>
        )
    }
;

export default RadioInput;


import React, {createRef} from 'react';

interface ICheckInput {
    name: string,
    storeName: string,
    value1name?: string
    value2name?: string,
    onChange?: any
    disabled?: boolean
    checked?: string
}

const GenderRadioInput: React.FC<ICheckInput> = (props: ICheckInput) => {
        const checkInputMale = createRef<HTMLInputElement>();
        const checkInputFemale = createRef<HTMLInputElement>();

        function checkMale() {
            return props.checked === 'm';
        }

        function checkFemale() {
            return props.checked === 'f';
        }

        function onChange() {
            if (checkInputMale.current !== null && checkInputFemale.current !== null) {
                if (checkInputMale.current.checked) {
                    props.onChange(props.storeName, 'm')
                } else if (checkInputFemale.current.checked) {
                    props.onChange(props.storeName, 'f')
                }
            }
        }

        return (
            <div className="col-md-4 mb-3">
                <label>{props.name} </label>
                <div className="form-group">
                    <label className='p-1'>
                        <input ref={checkInputMale} type="radio" name={props.name} onClick={onChange}
                               disabled={props.disabled}
                               defaultChecked={checkMale()}/> {props.value1name}
                    </label>
                    <label className='p-1'>
                        <input ref={checkInputFemale} type="radio" name={props.name} onClick={onChange}
                               disabled={props.disabled} defaultChecked={checkFemale()}/> {props.value2name}
                    </label>
                </div>
            </div>
        )
    }
;

export default GenderRadioInput;


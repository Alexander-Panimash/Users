import React from 'react';

interface IButtonProps {
    name: string;
    styleType: string;
    style: string,
    function?: any,
    ref?:any
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <button ref={props.ref} type='button' onClick={props.function} className={`btn btn-${props.styleType} ${props.style}`}>
            {props.name}
        </button>
    );
};

export default Button

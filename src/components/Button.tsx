import React from 'react';

interface IButtonProps {
    name: string;
    styleType: string;
    style: string,
    function?: any,
    functionData?: any
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const handleClick = () => {
        if (props.functionData) {
            props.function(props.functionData[0], props.functionData[1])
        } else if (!props.functionData && props.function) {
            props.function()
        } else {
            return null
        }
    };
    return (
        <button type='button' onClick={handleClick} className={`btn btn-${props.styleType} ${props.style}`}>
            {props.name}
        </button>
    );
};

export default Button

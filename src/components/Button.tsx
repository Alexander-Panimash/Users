import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface IButtonProps {
    name: string;
    link: string;
    styleType: string;
    style: string,
    type?:"button"|"submit"
    function?: any,
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <Link to={props.link} className='text-decoration-none' >
            <button onClick={props.function} type={props.type?props.type:"button"} className={`btn btn-${props.styleType} ${props.style}`}>
                {props.name}
            </button>
        </Link>
    );
};

export default Button

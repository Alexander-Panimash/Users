import React from 'react';
import {useEventDispatcher} from "../customhooks/eventObserveDispatch";

interface IButtonProps {
    name: string;
    dispatchValue: any,
    styleType: string;
    style: string,
}

const DispatchButton: React.FC<IButtonProps> = (props: IButtonProps) => {
    const buttonRef = React.createRef<HTMLButtonElement>();
    const deleteDispatcher = useEventDispatcher('deleteDataButton', buttonRef);
    const clickHandler = () => {
        deleteDispatcher(props.dispatchValue)
    };

    return (
        <div>
            <button ref={buttonRef} onClick={clickHandler}
                    className={`btn btn-${props.styleType} ${props.style}`}> {props.name} </button>
        </div>
    );
};

export default DispatchButton



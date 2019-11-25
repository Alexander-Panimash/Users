import React from 'react';
import {Link} from "react-router-dom";
import Button from '../Button';
import IUser from "../IUser";
import DispatchButton from "../DispatchButton";

interface IRowProps {
    values: IUser,
    getUserTable: (userID: string, navLink: string) => void
}

const TableRow: React.FC<IRowProps> = (props: IRowProps) => {
    return (
        <tr>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.id}</td>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.name}</td>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.email}</td>
            <td className="text-center align-middle overflow-hidden wordBreak">
                <Button name={`Просмотреть`} styleType={'success'}
                        style={'border tableButton'} function={props.getUserTable}
                        functionData={[props.values.id, `/user/${props.values.id}`]}/>
                <Button name={'Изменить'} styleType={'info'} style={'border tableButton'}
                        function={props.getUserTable}
                        functionData={[props.values.id, "/updateUser/"]}/>
                <div>
                    <Link to='/' className='text-decoration-none'>
                        <DispatchButton name={'Удалить'} dispatchValue={props.values.id} styleType={'danger'}
                                        style={'border tableButton'}/>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default TableRow


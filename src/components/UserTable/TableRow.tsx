import React from 'react';
import {Link} from "react-router-dom";
import Button from '../Button';
import IUser from "../IUser";
import DispatchButton from "../DispatchButton";

interface IRowProps {
    values: IUser,
    getUserTable: (item: IUser) => void
}

const TableRow: React.FC<IRowProps> = (props: IRowProps) => {
    return (
        <tr>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.id}</td>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.name}</td>
            <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.email}</td>
            <td className="text-center align-middle overflow-hidden wordBreak">
                <Link to={`/user/${props.values.id}`} className='text-decoration-none'
                      onClick={() => props.getUserTable(props.values)}>
                    <Button name={`Просмотреть`} styleType={'success'}
                            style={'border tableButton'}/>
                </Link>
                <Link to='/updateUser' className='text-decoration-none'
                      onClick={() => props.getUserTable(props.values)}>
                    <Button name={'Изменить'} styleType={'info'} style={'border tableButton'}/>
                </Link>
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


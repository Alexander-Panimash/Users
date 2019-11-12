import React from 'react';
import Button from '../Button';
import IUser from "../IUser";
import {Link} from "react-router-dom";

interface IRowProps {
    values: IUser,
    getData: any,
    deleteUser: any
}

const TableRow: React.FC<IRowProps> = (props: IRowProps) => {
    return (
        <tr>
            <td className="text-center align-middle col-12">{props.values.id}</td>
            <td className="text-center align-middle col-12">{props.values.name}</td>
            <td className="text-center align-middle col-12">{props.values.email}</td>
            <td className="text-center align-middle col-12">
                <Link to={`/user/${props.values.id}`} className='text-decoration-none'
                      onClick={() => props.getData(props.values)}>
                    <Button name={`Просмотреть`} styleType={'success'}
                            style={'btn-block border'}/>
                </Link>
                <Link to='/redactUser' className='text-decoration-none' onClick={() => props.getData(props.values)}>
                    <Button name={'Изменить'} styleType={'info'} style={'btn-block border '}/>
                </Link>
                <Link to='/' className='text-decoration-none' onClick={() => props.deleteUser(props.values.id)}>
                    <Button name={'Удалить'} styleType={'danger'}
                            style={'btn-block border '}/>
                </Link>
            </td>
        </tr>
    );
};

export default TableRow


import React from 'react';
import Button from '../Button';
import IUser from "../IUser";
import {Link} from "react-router-dom";
import {Consumer} from '../../pages/UserTable';

interface IRowProps {
    values: IUser,
}

const TableRow: React.FC<IRowProps> = (props: IRowProps) => {
    return (
        <Consumer>
            {(context: any) => (
                <tr>
                    <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.id}</td>
                    <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.name}</td>
                    <td className="text-center align-middle overflow-hidden wordBreak ">{props.values.email}</td>
                    <td className="text-center align-middle overflow-hidden wordBreak">
                        <Link to={`/user/${props.values.id}`} className='text-decoration-none'
                              onClick={() => context.getUserData(props.values)}>
                            <Button name={`Просмотреть`} styleType={'success'}
                                    style={'border tableButton'}/>
                        </Link>
                        <Link to='/updateUser' className='text-decoration-none'
                              onClick={() => context.getUserData(props.values)}>
                            <Button name={'Изменить'} styleType={'info'} style={'border tableButton'}/>
                        </Link>
                        <Link to='/' className='text-decoration-none'
                              onClick={() => context.deleteUser(props.values.id)}>
                            <Button name={'Удалить'} styleType={'danger'}
                                    style={' border tableButton '}/>
                        </Link>
                    </td>
                </tr>
            )}
        </Consumer>
    );
};

export default TableRow


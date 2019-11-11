import React, {FunctionComponent} from 'react';
import Button from '../Button';
import IUser from "../IUser";
import HTTPService from '../../services/http.service'

interface IRowProps {
    values: IUser,
    index: number,
}

const TableRow: React.FC<IRowProps> = (props: IRowProps) => {
    return (
        <tr>
            <td className="text-center align-middle col-12">{props.index}</td>
            <td className="text-center align-middle col-12">{props.values.name}</td>
            <td className="text-center align-middle col-12">{props.values.email}</td>
            <td className="text-center align-middle col-12">
                <Button name={'Просмотреть'} link={'/id'} styleType={'success'} style={'btn-block border  '}/>
                <Button name={'Изменить'} link={'/AddUser'} styleType={'info'} style={'btn-block border '}/>
                <Button function={HTTPService.deleteFromDB(props.values.name)} name={'Удалить'} link={'/'} styleType={'danger'} style={'btn-block border '}/>
            </td>
        </tr>
    );
};

export default TableRow


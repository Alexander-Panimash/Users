import React from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import IUser from '../components/IUser'


const users: IUser[] = [
    {
        name: 'Pasha',
        secondName: "Zagorski",
        lastName: 'Nikolaevich',
        email: 'mail1@gmail.com',
        phone: '6222770',
        gender: 'm',
        address: 'HRODNA'
    },
    {
        name: 'Anton',
        secondName: "Pavlov",
        lastName: 'Igorevich',
        email: 'mail2n@gmail.com',
        phone: '6221223131',
        gender: 'm',
        address: 'HRODNA'
    }
];

const headers: string[] = [
    'id',
    'name',
    'email',
];


const UserTable: React.FC = () => {
    return (
        <div className="container">
            <Caption/>
            <Table headers={headers} values={users}>
            </Table>
        </div>
    )
};

export default UserTable



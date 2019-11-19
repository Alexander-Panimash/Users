import React, {useEffect, useState} from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import {deleteUser, getUser, getUsersData} from "../services/store.service";
import IUser from "../components/IUser";


export const MyContext = React.createContext({
    getUserRow(item: IUser) {
    },
    deleteUserRow(idToDelete: string) {
    }
});
const Provider = MyContext.Provider;

const UserTable: React.FC = () => {
    const [users, setUsers] = useState([] as IUser[]);

    const tableHeaders: string[] = [
        'id',
        'Имя',
        'email',
    ];

    function getUserTable(item: IUser) {
        getUser(item);
    }

    function deleteUserTable(idToDelete: string) {
        deleteUser(idToDelete)
            .then(() => getUsersData())
            .then(((response) => setUsers(response)));
    }

    useEffect(() => {
        getUsersData().then((response) => setUsers(response))
    }, []);

    return (
        <Provider value={{getUserRow: getUserTable, deleteUserRow: deleteUserTable}}>
            <div className="container">
                <Caption/>
                <Table headers={tableHeaders} values={users}>
                </Table>
            </div>
        </Provider>
    )
};

export default UserTable



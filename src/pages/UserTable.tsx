import React, {useEffect, useState} from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import {deleteUser, getUser, getUsersData} from "../services/store.service";
import IUser from "../components/IUser";
import {connect} from "react-redux";
import {store} from "../store/configureStore";
import {addUsers} from "../actions/actions";


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
                .then(((response) => setUsers(response)))
                .then((response) => {
                    store.dispatch(addUsers(response))
                })
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
    }
;
const mapStateToProps = function (store: { usersState: { users: []; }; } ) {
    return {
        users: store.usersState.users
    };
};
export default connect(mapStateToProps)(UserTable)



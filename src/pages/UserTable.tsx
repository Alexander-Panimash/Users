import React, {useEffect} from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import {deleteUser, getUser, getUsersData} from "../services/store.service";
import IUser from "../components/IUser";
import {addUsers} from "../store/users/actions";
import {useEventObserver} from "../customhooks/eventObserveDispatch";
import {useDispatch, useSelector} from "react-redux";


const UserTable: React.FC = () => {
    const counter = useSelector((state: any) => (state.usersState.users));
    const dispatch = useDispatch();

    const tableHeaders: string[] = [
        'id',
        'Имя',
        'email',
    ];

    const tableRef = React.createRef<HTMLDivElement>();

    const getUserTable = (item: IUser) => {
        getUser(item);
    };
    
    const deleteUserTable = (idToDelete: string) => {
        deleteUser(idToDelete)
            .then(() => getUsersData())
            .then((response) => dispatch(addUsers(response)))
    };
    useEffect(() => {
        getUsersData().then(
            (response) => dispatch(addUsers(response))
        )
    }, []);

    useEventObserver((event: any) => {
        deleteUserTable(event.detail);
    }, 'deleteDataButton', tableRef);

    return (
        <div ref={tableRef} className="container">
            <Caption/>
            <Table headers={tableHeaders} values={counter} getUserTable={getUserTable}>
            </Table>
        </div>
    )
};

export default UserTable



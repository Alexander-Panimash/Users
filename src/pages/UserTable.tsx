import React, {useEffect} from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import {deleteUser, getUserFromDb, getUsersData} from "../services/store.service";
import {useEventObserver} from "../customhooks/eventObserveDispatch";
import {useDispatch, useSelector} from "react-redux";

interface IProps {
    history: any
}

const UserTable: React.FC<IProps> = (props: IProps) => {
    const users = useSelector((state: any) => (state.usersState.users));
    const dispatch = useDispatch();

    function navigate(navLink: string) {
        const {history} = props;
        history.push(navLink);
    }

    const tableHeaders: string[] = [
        'id',
        'Имя',
        'email',
    ];

    const tableRef = React.createRef<HTMLDivElement>();

    const getUserFromDbTable = (userID: string, navLink: string) => {
            getUserFromDb(userID)
                .then((response) => {
                        dispatch({type: "GET_USER", payload: response})
                    }
                )
                .then(() => {
                    navigate(navLink)
                })
        }
    ;
    const deleteUserTable = (idToDelete: string) => {
        deleteUser(idToDelete)
            .then(() => getUsersData()
                .then((response) => dispatch({type: "ADD_USERS", payload: response})
                ))
    };
    useEffect(() => {
        function getData() {
            getUsersData().then(
                (response) => dispatch({type: "ADD_USERS", payload: response})
            )
        }

        getData()
    }, [dispatch]);

    useEventObserver((event: any) => {
        deleteUserTable(event.detail);
    }, 'deleteDataButton', tableRef);


    return (
        <div ref={tableRef} className="container">
            <Caption/>
            <Table headers={tableHeaders} values={users} getUserTable={getUserFromDbTable}>
            </Table>
        </div>
    )
};

export default UserTable



import React from 'react';
import Caption from "../components/UserTable/Caption";
import Table from "../components/UserTable/Table";
import Store from "../services/store.service";
import IUser from "../components/IUser";
import HttpService from '../services/http.service'

const headers: string[] = [
    'id',
    'Имя',
    'email',
];

function deleteUser(idToDelete: string) {
    HttpService.delete(`/${idToDelete}`)
        .then(res => {
            console.log(res);
        });
}


function getUserData(data: IUser) {
    let {id, name, secondName, lastName, email, phone, gender, address} = data;
    Store.user.name = name;
    Store.user.id = id;
    Store.user.secondName = secondName;
    Store.user.lastName = lastName;
    Store.user.email = email;
    Store.user.phone = phone;
    Store.user.gender = gender;
    Store.user.address = address;
}

class UserTable extends React.Component {
    componentDidMount(): void {
        HttpService.get(`/user`)
            .then(response => {
                Store.users = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <Caption/>
                <Table headers={headers} values={Store.users} getData={getUserData} deleteUser={deleteUser}>
                </Table>
            </div>
        )
    }
}

export default UserTable



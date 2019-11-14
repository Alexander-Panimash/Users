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
    HttpService.delete(`/user/${idToDelete}`)
        .then(res => {
            console.log(res);
        })
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

export const {Provider, Consumer} = React.createContext({
    deleteUser, getUserData
});

class UserTable extends React.Component {
    componentDidMount(): void {
        HttpService.get("/user/")
            .then(response => {
                Store.users = response.data.data;
                this.forceUpdate(() => void {});
            })
            .catch(error => {
                console.log(error);
                Store.users = [
                    {
                        _id: '1',
                        name: 'Pasha',
                        secondName: "Zagorski",
                        lastName: 'Nikolaevich',
                        email: 'mail1@gmail.com',
                        phone: '6222770',
                        gender: 'm',
                        address: 'Grodno'
                    },
                    {
                        _id: '2',
                        name: 'Masha',
                        secondName: "Kraynaya",
                        lastName: 'Viktorovna',
                        email: 'mail2n@gmail.com',
                        phone: '6221223131',
                        gender: 'f',
                        address: 'Minsk'
                    }
                ];
                this.forceUpdate(() => void {})
            });
    }

    render() {
        return (
            <Provider value={{deleteUser, getUserData}}>
                <div className="container">
                    <Caption/>
                    <Table headers={headers} values={Store.users}>
                    </Table>
                </div>
            </Provider>)
    }
}

export default UserTable



import React, {useEffect, useState} from 'react';
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

export const MyContext = React.createContext({
    getUserData(values: IUser) {
    },
    deleteUser(idToDelete: string) {
    }
});
const Provider = MyContext.Provider;

interface IUsers {
    users: IUser[]
}

let isMounted: boolean;

const UserTable: React.FC = () => {

    const [users, setUsers] = useState<IUsers | any>([]);
    const [render, setRender] = useState(0);

    function deleteUser(idToDelete: string) {
        HttpService.delete(`/user/${idToDelete}`)
            .then(res => {
                console.log(res);
            })
            .then(() => setRender(render +1))
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

    useEffect(() => {
        isMounted = true;
        HttpService
            .get("/user/")
            .then(response => {
                if (isMounted) {
                    setUsers(response.data.data)
                }
            })
            .catch(error => {
                console.log(error);
                setUsers([
                    {
                        id: '1',
                        name: 'Pasha',
                        secondName: "Zagorski",
                        lastName: 'Nikolaevich',
                        email: 'mail1@gmail.com',
                        phone: '6222770',
                        gender: 'm',
                        address: 'Grodno'
                    },
                    {
                        id: '2',
                        name: 'Masha',
                        secondName: "Kraynaya",
                        lastName: 'Viktorovna',
                        email: 'mail2n@gmail.com',
                        phone: '6221223131',
                        gender: 'f',
                        address: 'Minsk'
                    }
                ])
            });
        return () => {
            isMounted = false;
        };
    }, [render]);

    return (
        <Provider value={{
            deleteUser: deleteUser, getUserData: getUserData
        }}>
            <div className="container">
                <Caption/>
                <Table headers={headers} values={users}>
                </Table>
            </div>
        </Provider>
    )
};

export default UserTable



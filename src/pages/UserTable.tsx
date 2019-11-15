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
export const {Provider, Consumer} = React.createContext({});

interface IProps {
}

interface IState {
    users: IUser[],
}


class UserTable extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.getUserData = this.getUserData.bind(this)
    }

    deleteUser(idToDelete: string) {
        HttpService.delete(`/user/${idToDelete}`)
            .then(res => {
                console.log(res);
            })
            .then(() => HttpService.get("/user/")
                .then(response => {
                    this.setState({users: response.data.data})
                }))
    }

    getUserData(data: IUser) {
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

    componentDidMount(): void {
        console.log('Component did mount');
        HttpService.get("/user/")
            .then(response => {
                this.setState({users: response.data.data})
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    users: [
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
                    ]
                })
            })
    }

    render() {
        return (
            <Provider value={{
                deleteUser: this.deleteUser,
                getUserData: this.getUserData
            }
            }>
                <div className="container">
                    <Caption/>
                    <Table headers={headers} values={this.state.users}>
                    </Table>
                </div>
            </Provider>)
    }
}

export default UserTable



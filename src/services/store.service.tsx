import IUser from "../components/IUser";
import HttpService from "./http.service";
import {UserMapper} from "../mappers/UserMapper";


const Store = {
    user: {
        id: '',
        name: '',
        secondName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
    },
};

export function getUsersData() {
    return HttpService
        .get("/user/")
        .then(response => {
            return UserMapper(response.data.data)
        })
        .catch(error => {
            console.log(error);
            return UserMapper([
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
        })
}

export function getUser(data: IUser) {
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

export function addUser() {
        return HttpService.post(`/user/`, {
            name: Store.user.name,
            secondName: Store.user.secondName,
            lastName: Store.user.lastName,
            email: Store.user.email,
            phone: Store.user.phone,
            gender: Store.user.gender,
            address: Store.user.address,
        })
            .then((res) => console.log(res))
            .catch(error => {
                console.log(error);
            });
}

export function deleteUser(idToDelete: string) {
    return HttpService.delete(`/user/${idToDelete}`)
        .then(res => {
            console.log(res);
        })
}

export function updateUser() {
        return HttpService.put(`/user/${Store.user.id}`, {
            name: Store.user.name,
            secondName: Store.user.secondName,
            lastName: Store.user.lastName,
            email: Store.user.email,
            phone: Store.user.phone,
            gender: Store.user.gender,
            address: Store.user.address,
        }).then(response => console.log(response))
            .catch(error => {
                console.log(error);
            });
}

export function checkStore() {
    return (
        Store.user.name &&
        Store.user.secondName &&
        Store.user.lastName &&
        Store.user.email &&
        Store.user.phone &&
        Store.user.gender &&
        Store.user.address
    )
}

export function cleanStore() {
    Store.user.id = '';
    Store.user.name = '';
    Store.user.secondName = '';
    Store.user.lastName = '';
    Store.user.email = '';
    Store.user.phone = '';
    Store.user.gender = '';
    Store.user.address = '';
}

export function changeUser(param: string, value: any) {
    Store.user[param] = value;
}

export default Store;

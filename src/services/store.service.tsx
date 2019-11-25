import IUser from "../components/IUser";
import HttpService from "./http.service";
import {UserMapper} from "../mappers/UserMapper";

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


export function getUserFromDb(userID: string) {
    return HttpService
        .get(`/user/${userID}`)
        .then(response => {
            return (response.data)
        })
        .catch(error => {
            console.log(error);
        })
}


export function addUser(user: IUser) {
        return HttpService.post(`/user/`, {
            name: user.name,
            secondName: user.secondName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            address: user.address,
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

export function updateUser(data: IUser) {
    return HttpService.put(`/user/${data.id}`, {
        name: data.name,
        secondName: data.secondName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        address: data.address,
        }).then(response => console.log(response))
            .catch(error => {
                console.log(error);
            });
}

export function checkStore(user: IUser) {
    return (
        user.name &&
        user.secondName &&
        user.lastName &&
        user.email &&
        user.phone &&
        user.gender &&
        user.address
    )
}

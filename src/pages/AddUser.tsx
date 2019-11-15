import React from 'react';
import TextInput from "../components/AddUser/TextInput";
import GenderRadioInput from "../components/AddUser/GenderRadioInput";
import Button from "../components/Button";
import Store from "../services/store.service";
import {Link} from "react-router-dom";
import HttpService from '../services/http.service'


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


interface IProps {
    history: any
}

const AddUser: React.FC<IProps> = (props: IProps) => {
    function navigateToUser() {
        const {history} = props;
        history.push("/user");
    }

    function addUser(e: any) {
        e.preventDefault();
        if (checkStore()) {
            HttpService.post(`/user/`, {
                name: Store.user.name,
                secondName: Store.user.secondName,
                lastName: Store.user.lastName,
                email: Store.user.email,
                phone: Store.user.phone,
                gender: Store.user.gender,
                address: Store.user.address,
            })
                .then((res) => console.log(res))
                .then(() => navigateToUser())
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="container">
            {cleanStore()}
            <h2 className="text-center m-1 p-3 ">Создание нового пользователя</h2>
            <form>
                <div className="form-row">
                    <TextInput name={'Имя'} placeholder={'Введите имя'}
                               storeName='name'
                               onChange={changeUser}/>
                    <TextInput name={'Фамилия'} placeholder={"Введите фамилию"}
                               storeName='secondName'
                               onChange={changeUser}/>
                    <TextInput name={'Отчество'} placeholder={"Введите отчество"}
                               storeName='lastName'
                               onChange={changeUser}/>
                </div>
                <div className="form-row">
                    <TextInput name={'Email'} placeholder={'Введите Email'}
                               storeName='email'
                               onChange={changeUser}/>
                    <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                               storeName='phone'
                               onChange={changeUser}/>
                    <GenderRadioInput name={'Пол'}
                                      value1name={'Мужской'}
                                      storeName={'gender'}
                                      value2name={'Женский'}
                                      onChange={changeUser}/>
                    <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                               storeName='address'
                               styles={'col-md-12 mb-3'}
                               onChange={changeUser}/>
                </div>
                <div className="form-group">
                </div>
                <div className="form-row mb-3 ">
                    <div className=" mr-auto  ">
                        <Link to='/'>
                            <Button name={'Отмена'} styleType={'warning'} style={"btn-sm p-3"}/>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <Button name={'Добавить пользователя'} styleType={"primary"}
                                    function={addUser} style={"btn-sm p-3"}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddUser;

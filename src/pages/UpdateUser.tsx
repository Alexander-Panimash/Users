import React from 'react';
import TextInput from "../components/AddUser/TextInput";
import RadioInput from "../components/AddUser/RadioInput";
import Button from "../components/Button";
import Store from "../services/store.service";
import {Link} from "react-router-dom";
import {changeUser, checkState, cleanState} from "./AddUser";
import HttpService from "../services/http.service";

function updateUser() {
    if (checkState()) {
        HttpService.post(`/${Store.user.id}`, {
            name: Store.user.name,
            secondName: Store.user.secondName,
            lastName: Store.user.lastName,
            email: Store.user.email,
            phone: Store.user.phone,
            gender: Store.user.gender,
            address: Store.user.address,
        })
    }
    cleanState();
}

const UpdateUser: React.FC = () => {
        return (
            <div className="container">
                <h2 className="text-center m-1 p-3 ">Изменение информации о пользователе </h2>
                <form>
                    <div className="form-row">
                        <TextInput name={'Имя'} placeholder={'Введите имя'}
                                   storeName='name'
                                   defaultValue={Store.user.name}
                                   onChange={changeUser}
                        />
                        <TextInput name={'Фамилия'} placeholder={"Введите фамилию"}
                                   storeName='secondName'
                                   onChange={changeUser}
                                   defaultValue={Store.user.secondName}
                        />

                        <TextInput name={'Отчество'} placeholder={"Введите отчество"}
                                   storeName='lastName'
                                   onChange={changeUser}
                                   defaultValue={Store.user.lastName}
                        />
                    </div>
                    <div className="form-row">
                        <TextInput name={'Email'} placeholder={'Введите Email'}
                                   storeName='email'
                                   onChange={changeUser}
                                   defaultValue={Store.user.email}
                        />
                        <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                                   storeName='phone'
                                   onChange={changeUser}
                                   defaultValue={Store.user.phone}
                        />
                        <RadioInput name={'Пол'}
                                    value1name={'Мужской'}
                                    storeName={'gender'}
                                    value2name={'Женский'}
                                    onChange={changeUser}
                                    checked={Store.user.gender}
                        />
                        <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                                   storeName='address'
                                   styles={'col-md-12 mb-3'}
                                   onChange={changeUser}
                                   defaultValue={Store.user.address}
                        />
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
                                <Link to={'/'} onClick={updateUser}>
                                    <Button name={'Сохранить изменения'} styleType={"primary"}
                                            style={"btn-sm p-3"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
;

export default UpdateUser;

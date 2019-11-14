import React from 'react';
import TextInput from "../components/AddUser/TextInput";
import GenderRadioInput from "../components/AddUser/GenderRadioInput";
import Button from "../components/Button";
import Store from "../services/store.service";
import {Link} from "react-router-dom";


const UserDetails: React.FC = () => {
    return (
        <div className="container">
            <h2 className="text-center m-1 p-3 ">Подробная информация пользователя</h2>
            <form>
                <div className="form-row">
                    <TextInput name={'Имя'} placeholder={'Введите имя'} value={Store.user.name}
                               storeName='name'
                               disabled={true}
                    />
                    <TextInput name={'Фамилия'} placeholder={"Введите фамилию"} value={Store.user.secondName}
                               storeName='secondName' disabled={true}
                    />
                    <TextInput name={'Отчество'} placeholder={"Введите отчество"} value={Store.user.lastName}
                               storeName='lastName' disabled={true}
                    />
                </div>
                <div className="form-row">
                    <TextInput name={'Email'} placeholder={'Введите Email'} value={Store.user.email}
                               storeName='email' disabled={true}
                    />
                    <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                               storeName='phone'
                               value={Store.user.phone} disabled={true}
                    />
                    <GenderRadioInput name={'Пол'}
                                      value1name={'Мужской'}
                                      storeName={'gender'}
                                      value2name={'Женский'}
                                      checked={Store.user.gender}
                                      disabled={true}
                    />
                    <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                               storeName='address'
                               styles={'col-md-12 mb-3'} value={Store.user.address} disabled={true}
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
                </div>
            </form>
        </div>
    );
};

export default UserDetails;

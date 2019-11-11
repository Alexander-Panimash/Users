import React from 'react';
import TextInput from "../components/AddUser/TextInput";
import RadioInput from "../components/AddUser/RadioInput";
import Button from "../components/Button";
import Store from "../services/store.service";


const AddUser: React.FC = () => {
    return (
        <div className="container">
            <h2 className="text-center m-1 p-3 ">Создание нового пользователя</h2>
            <form>
                <div className="form-row">
                    <TextInput name={'Имя'} placeholder={'Введите имя'} value={Store.state.name}
                               stateName='name'
                               onChange={Store.changeState}/>
                    <TextInput name={'Фамилия'} placeholder={"Введите фамилию"} value={Store.state.secondName}
                               stateName='secondName'
                               onChange={Store.changeState}/>
                    <TextInput name={'Отчество'} placeholder={"Введите отчество"} value={Store.state.lastName}
                               stateName='lastName'
                               onChange={Store.changeState}/>
                </div>
                <div className="form-row">
                    <TextInput name={'Email'} placeholder={'Введите Email'} value={Store.state.email}
                               stateName='email'
                               onChange={Store.changeState}/>
                    <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                               stateName='phone'
                               value={Store.state.phone}
                               onChange={Store.changeState}/>
                    <RadioInput name={'Пол'}
                                value1name={'Мужской'}
                                stateName={'gender'}
                                value2name={'Женский'}
                                onChange={Store.changeState}/>
                    <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                               stateName='address'
                               styles={'col-md-12 mb-3'} value={Store.state.address}
                               onChange={Store.changeState}/>
                </div>
                <div className="form-group">
                </div>
                <div className="form-row mb-3 ">
                    <div className=" mr-auto  ">
                        <Button name={'Отмена'} link={"/"} styleType={'warning'} style={"btn-sm p-3"}/>
                    </div>
                    <div>
                        <div>
                            <Button name={'Добавить пользователя'} link={''} styleType={"primary"}
                                    style={"btn-sm p-3"} type="submit"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddUser;

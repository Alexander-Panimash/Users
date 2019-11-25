import React from 'react';
import {Link} from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/AddUser/TextInput";
import GenderRadioInput from "../components/AddUser/GenderRadioInput";
import {updateUser} from "../services/store.service";
import {useDispatch, useSelector} from "react-redux";

interface IProps {
    history: any
}

const UpdateUser: React.FC<IProps> = (props: IProps) => {
    const user = useSelector((state: any) => (state.userState.user));
    const dispatch = useDispatch();

    function navigateToTable() {
        const {history} = props;
        history.push("/");
        dispatch({type: "RESET_USER"})
    }

    function changeUserPage(param: string, value: any) {
        dispatch({type: "CHANGE_USER", payload: {param, value}})
    }

    function updateUserPage() {
        updateUser(user).then(() => navigateToTable()
        )
    }

    return (
        <div className="container">
            <h2 className="text-center m-1 p-3 ">Изменение информации пользователя</h2>
            <form>
                <div className="form-row">
                    <TextInput name={'Имя'} placeholder={'Введите имя'}
                               storeName='name'
                               defaultValue={user.name}
                               onChange={changeUserPage}
                    />
                    <TextInput name={'Фамилия'} placeholder={"Введите фамилию"}
                               storeName='secondName'
                               onChange={changeUserPage}
                               defaultValue={user.secondName}
                    />

                    <TextInput name={'Отчество'} placeholder={"Введите отчество"}
                               storeName='lastName'
                               onChange={changeUserPage}
                               defaultValue={user.lastName}
                    />
                </div>
                <div className="form-row">
                    <TextInput name={'Email'} placeholder={'Введите Email'}
                               storeName='email'
                               onChange={changeUserPage}
                               defaultValue={user.email}
                    />
                    <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                               storeName='phone'
                               onChange={changeUserPage}
                               defaultValue={user.phone}
                    />
                    <GenderRadioInput name={'Пол'}
                                      value1name={'Мужской'}
                                      storeName={'gender'}
                                      value2name={'Женский'}
                                      onChange={changeUserPage}
                                      checked={user.gender}
                    />
                    <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                               storeName='address'
                               styles={'col-md-12 mb-3'}
                               onChange={changeUserPage}
                               defaultValue={user.address}
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
                            <Button function={updateUserPage} name={'Сохранить изменения'} styleType={"primary"}
                                    style={"btn-sm p-3"}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default UpdateUser;

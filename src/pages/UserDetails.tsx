import React from 'react';
import TextInput from "../components/AddUser/TextInput";
import RadioInput from "../components/AddUser/RadioInput";
import Button from "../components/Button";

interface Props {
}

interface State {
    users: object[],
    id: string,
    name: string,
    secondName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: string,
    address: string,
}

class UserDetails extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            id: '',
            name: '',
            secondName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
        };
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center m-1 p-3 ">Создание нового пользователя</h2>
                <form>
                    <div className="form-row">
                        <TextInput name={'Имя'} placeholder={'Введите имя'} value={this.state.name}
                                   stateName='name'
                                   disabled={true}
                        />
                        <TextInput name={'Фамилия'} placeholder={"Введите фамилию"} value={this.state.secondName}
                                   stateName='secondName' disabled={true}
                        />
                        <TextInput name={'Отчество'} placeholder={"Введите отчество"} value={this.state.lastName}
                                   stateName='lastName' disabled={true}
                        />
                    </div>
                    <div className="form-row">
                        <TextInput name={'Email'} placeholder={'Введите Email'} value={this.state.email}
                                   stateName='email' disabled={true}
                        />
                        <TextInput name={'Номер телефона'} placeholder={'Введите номер телефона'}
                                   stateName='phone'
                                   value={this.state.phone} disabled={true}
                        />
                        <RadioInput name={'Пол'}
                                    value1name={'Мужской'}
                                    stateName={'gender'}
                                    value2name={'Женский'}
                                    disabled={true}
                        />
                        <TextInput name={'Страна, город, улица, дом , кв'} placeholder={'Введите адрес'}
                                   stateName='address'
                                   styles={'col-md-12 mb-3'} value={this.state.address} disabled={true}
                        />
                    </div>
                    <div className="form-group">
                    </div>
                    <div className="form-row mb-3 ">
                        <div className=" mr-auto  ">
                            <Button name={'Отмена'} link={"/"} styleType={'warning'} style={"btn-sm p-3"}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserDetails;

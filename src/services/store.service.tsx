import React from 'react';

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

class Store extends React.Component<Props, State> {

    constructor(props?: any) {
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
    changeState = (param: string, value: any) => {
        this.setState({
                ...this.state,
                [param]: value
            }
        );
        console.log(this.state);
    }

}

export default new Store ();

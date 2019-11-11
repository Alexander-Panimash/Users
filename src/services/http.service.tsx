import React from "react";
import axios from "axios";
import IUser from "../components/IUser";

class HttpService extends React.Component {
    private urlRoot: string;

    constructor(props?:any) {
        super(props);
        this.urlRoot = "https://10.103.1.37"
    }
    getUsersData = () => {
        axios.get(`http://10.103.1.37`)
            .then(response => {
                this.setState({
                    users: response
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    addUser = (props:IUser) => {
        axios.post("http://10.103.1.37", {
            name: props.name,
            secondName: props.secondName,
            lastName: props.lastName,
            email: props.email,
            phone: props.phone,
            gender: props.gender,
            address: props.address,
        });
    };


    deleteFromDB = (idToDelete: string) => {
        axios.delete("http://10.103.1.37", {
            data: {
                id: idToDelete
            }
        })
    };
    // updateDB = (idToUpdate:string, updateToApply:string) => {
    //     let objIdToUpdate = null;
    //     this.state.users.forEach(dat => {
    //         if (dat.id === idToUpdate) {
    //             objIdToUpdate = dat.id;
    //         }
    //     });
    //
    //     axios.post("http://localhost:3001/api/updateData", {
    //         id: objIdToUpdate,
    //         update: { message: updateToApply }
    //     });
    // };

}

export default new HttpService ();



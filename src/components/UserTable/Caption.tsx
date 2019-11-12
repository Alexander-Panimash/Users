import React from 'react';
import Button from "../Button";
import {Link} from "react-router-dom";


const Caption: React.FC = () => {
    return (
        <div className="row">
            <div className="col-10 item">
                <h2 className="text-center p-3">Список пользователей </h2>
            </div>
            <Link to='/AddUser'>
                <Button name={"Добавить пользователя"} styleType={"primary"} style={"btn-sm p-2"}/>
            </Link>
        </div>
    );
};

export default Caption

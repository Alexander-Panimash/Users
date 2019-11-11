import React from 'react';
import Button from "../Button";

const Caption: React.FC = () => {
    return (
        <div className="row">
            <div className="col-10 item">
                <h2 className="text-center p-3">Список пользователей </h2>
            </div>
            <Button name={"Добавить пользователя"} link={"/AddUser"} styleType={"primary"} style={"btn-sm p-2"}/>
        </div>
    );
};

export default Caption

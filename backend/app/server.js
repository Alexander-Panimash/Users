const express = require("express");
const server = express();
const cors = require('cors');
DataStore = require('nedb');
const bodyParser = require('body-parser');

const db = new DataStore({filename: './app/db/users.db',autoload:true});

const checkData = (data) => {
    return (data.name &&
        data.secondName &&
        data.lastName &&
        data.email &&
        data.phone &&
        data.gender &&
        data.address)
};

const replaceId = (data) => {
    data.id = data._id;
    delete data._id;
    return data;
};

server.use(cors());
server.use(bodyParser.json());

server.get("/user/", function (req, res) {

    db.find({}, (err, data) => {
        if (err) return res.sendStatus(503);
        for (let i = 0; i < data.length; i++) {
            replaceId(data[i]);
        }
        console.log('get');
        return res.send({statusCode: 200, data: data});
    });
});

server.get("/user/:id", function (req, res) {
    const id = req.params.id;
    db.findOne({_id: id}, function (err, user) {
        if (err) return res.status(503);
        res.send(user);
    });
});

server.post("/user/", function (req, res) {

    if (!req.body) return res.status(400);
    const {name, secondName, lastName, email, phone, gender, address} = req.body;
    const user = {
        name: name,
        secondName: secondName,
        lastName: lastName,
        email: email,
        phone: phone,
        gender: gender,
        address: address,
    };
    if (checkData(user)) {
        db.insert(user, function (err, data) {
            if (err) return res.status(500);
            console.log('add');
            return res.send({statusCode: 201 , data: data});
        })
    } else return res.send(400);

});

server.put("/user/:id", function (req, res) {

    if (!req.body) return res.status(400);
    const id = req.params.id;
    const {name, secondName, lastName, email, phone, gender, address} = req.body;

    const user = {
        name: name,
        secondName: secondName,
        lastName: lastName,
        email: email,
        phone: phone,
        gender: gender,
        address: address,
    };

    if (checkData(user)) {
        db.update({_id: id},user , function (err,user) {
            if (err) return res.status(500);
            console.log('update');
            return res.send({statusCode: 201 , data: user});
        });
    }
});

server.delete("/user/:id", function (req, res) {
    console.log('delete');
    const id = req.params.id;
    db.remove({_id: id}, (err) => {
        if (err) return res.sendStatus(503);
        console.log('delete');
        return res.sendStatus(204)
    });
});


server.listen(5000);

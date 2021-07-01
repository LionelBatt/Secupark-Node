const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Car = require("../models/car.model");
const parking = require("../models/parking.model");

exports.guest = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(parking => {
        if (parking == null) {
            return res.status(404).send({message: "No parking inforrmation found"});
        }
        res.status(200).send({
            adresse: User.adresse,
        });
    })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
    parking.findOne({
        wheere:{
            adresse:User.adresse
        }
    }).then(parking => {
        if (parking == null) {
            return res.status(404).send({message: "No parking inforrmation found"});
        }
        res.status(200).send({
            id: parking.id,
        });
    })
    Car.Create({
        plaque: req.body.plaque,
        brand: req.body.brand,
        model: req.body.model,
        owner: req.body.username,
        is_visitor: req.body.is_visitor,
        parking: res.parking.id,
    }).then(Car => {
        if (Car == null) {
            return res.status(404).send({message: "an error occured"});
        }
        res.status(200).send({message: "success"});
    })
}
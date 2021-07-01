const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Car = require("../models/car.model");

exports.createCar = (req, res) => {
    Car.Create({
        plaque: req.body.plaque,
        brand: req.body.brand,
        model: req.body.model,
        owner: req.body.username,
        is_visitor: req.body.is_visitor,
        parking: res.parking.id,
    }).then(car => {
        if (car == null) {
            return res.status(404).send({message: "an error occured"});
        }
        res.status(200).send({message: "success"});
    })
}
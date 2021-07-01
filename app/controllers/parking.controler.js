const db = require("../models");
const config = require("../config/auth.config");
const Car = db.car;

exports.guest = (req, res) => {
    Car.create({
        plaque: req.body.plaque,
        brand: req.body.brand,
        model: req.body.model,
        owner: req.body.username,
        is_visitor: req.body.is_visitor,
    }).then(Car => {
        if (Car == null) {
            return res.status(404).send({message: "an error occured"});
        }
        res.status(200).send({message: "success"});
    })
}
exports.newCar = (req, res) => {
    Car.create({
        plaque: req.body.plaque,
        brand: req.body.brand,
        model: req.body.model,
        owner: req.body.username,
        is_visitor: req.body.is_visitor,
    }).then(Car => {
        if (Car == null) {
            return res.status(404).send({message: "an error occured"});
        }
        res.status(200).send({message: "success"});
    })
}
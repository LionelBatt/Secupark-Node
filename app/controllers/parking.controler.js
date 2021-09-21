const db = require("../models");
const config = require("../config/auth.config");
const Car = db.car;
const User = db.user;

exports.guest = (req, res) => {
    Car.create({
        plaque: req.body.plaque,
        brand: req.body.brand,
        model: req.body.model,
        name: req.body.name,
        is_visitor: req.body.is_visitor,
        parking:req.body.parking,
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
        is_visitor: req.body.is_visitor,
        parking:req.body.parking,
    }).then(Car => {
        if (Car == null) {
            return res.status(404).send({message: "an error occured"});
        }
        res.status(200).send({message: "success"});
    })
}

exports.getHistory = (req, res) => {
    Car.findAll({})
        .then(cars => {
        return res.status(200).json(cars);
    })
}
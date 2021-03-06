const { authJwt } = require("../middleware");
const controller = require("../controllers/parking.controler");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/secupark/guest-car",
        [authJwt.verifyToken],
        controller.guest
    );
    app.post(
        "/api/secupark/new-car",
        [authJwt.verifyToken],
        controller.newCar
    );
    app.get(
        '/api/secupark/history',
        [authJwt.verifyToken],
        controller.getHistory
    )
};

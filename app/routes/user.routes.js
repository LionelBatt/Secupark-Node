const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const querystring = require('querystring');
module.exports = function(app) {
  app.use(function(req, res, next) {
    next();
  });

  app.get(
    "/api/secupark/reset-password", function (req, res) {
          const query = querystring.stringify({
              "token": req.query.token
          });
        res.redirect('https://conservative-hockey-31123.herokuapp.com/resetPassword?'+ query);
       },
    controller.resetPassword
  );

  app.post(
    "/api/secupark/reset-passwords",
    controller.changePassword
  );
  
  app.post(
    "/api/secupaark/forgot-password",
    controller.forgot
  );
};

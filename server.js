const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const { Router } = require("express");
const swaggerUi = require('swagger-ui-express');
//api = require("./routes/api.json");
const Role = db.role;

const app = express();

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger api doc interface
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf, swaggerConf));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(api));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = (sequelize, Sequelize) => {
    const parking = sequelize.define("users", {
        Name: {
            type: Sequelize.STRING
        },
        adresse: {
            type: Sequelize.STRING
        },
        user: {
            type: Sequelize.STRING
        }
    });

    return parking;
};
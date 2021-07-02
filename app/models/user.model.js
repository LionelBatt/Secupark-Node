module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        adresse: {
            type: Sequelize.STRING
        },
    });

    return User;
};
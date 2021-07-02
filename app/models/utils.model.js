module.exports = (sequelize, Sequelize) => {
    const utils = sequelize.define("utils", {
        host: {
            type: Sequelize.STRING
        },
        port: {
            type: Sequelize.BIGINT
        },
        user:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        utils_ID:{
            type: Sequelize.STRING
        },
    });

    return utils;
};
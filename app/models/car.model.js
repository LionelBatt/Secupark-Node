module.exports = (sequelize, Sequelize) => {
    const car = sequelize.define("users", {
        plaque: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING
        },
        is_visitor: {
            type: Sequelize.BOOL
        },
        parking: {
            type: Sequelize.STRING
        }
    });

    return car;
};
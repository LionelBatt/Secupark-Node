module.exports = (sequelize, Sequelize) => {
    const car = sequelize.define("car", {
        plaque: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        is_visitor: {
            type: Sequelize.BOOLEAN
        },
        parking: {
            type: Sequelize.STRING
        }
    });

    return car;
};
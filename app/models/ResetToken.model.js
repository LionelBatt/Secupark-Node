module.exports = (sequelize, Sequelize) => {
    const ResetToken = sequelize.define("ResetToken", {
      email: {
        type: Sequelize.STRING
      },
      expiration: {
        type: Sequelize.DATE
      },
      token:{
          type: Sequelize.STRING
      },
      used:{
          type: Sequelize.BIGINT
      }
    });
  
    return ResetToken;
  };
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
  
    return User;
  };
  
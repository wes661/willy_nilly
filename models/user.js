module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      email: DataTypes.STRING,

      password: DataTypes.STRING,

      location: DataTypes.STRING,

      likeMusic: DataTypes.BOOLEAN,

      likeSports: DataTypes.BOOLEAN,

      likeComedy: DataTypes.BOOLEAN,

      likeFestival: DataTypes.BOOLEAN,

      likeChildren: DataTypes.BOOLEAN,

      likeFood: DataTypes.BOOLEAN,

      likeHealth: DataTypes.BOOLEAN
    });
  
    return User;
  };
  
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User;

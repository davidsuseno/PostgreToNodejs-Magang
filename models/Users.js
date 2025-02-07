const { DataTypes } = require('sequelize');
const sequelize = require('../config/databasepg');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false, // Nonaktifkan timestamps
});

module.exports = User;

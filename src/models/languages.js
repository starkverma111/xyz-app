const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Language = sequelize.define('Language', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  language: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Language;

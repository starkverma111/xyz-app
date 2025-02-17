const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Organization = sequelize.define('Organization', {
  org_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  org_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  company_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  access_start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  access_end_date: {
    type: DataTypes.DATE,
  },
  primary_contact_person: {
    type: DataTypes.STRING(100),
  },
  primary_contact_number: {
    type: DataTypes.STRING(20),
  },
  primary_contact_email: {
    type: DataTypes.STRING(100),
  },
  website: {
    type: DataTypes.STRING(255),
  },
  PAN: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  GST_No: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
  },
  state: {
    type: DataTypes.STRING(100),
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
  updated_by: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Organization;

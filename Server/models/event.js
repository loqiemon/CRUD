const { DataTypes } = require('sequelize')
const db = require('../database/db.js')

const Events = db.define('events',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
  {
    timestamps: false
  }
)

module.exports = Events
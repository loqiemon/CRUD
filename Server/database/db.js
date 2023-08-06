const { Sequelize } = require('sequelize');
require('dotenv').config();
module.exports = new Sequelize(process.env.DATABASE, {
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
})


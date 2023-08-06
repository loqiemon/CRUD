const { Sequelize } = require('sequelize');

module.exports = new Sequelize("postgresql://postgres:dypmbc2x9ubJpCHYobrY@containers-us-west-141.railway.app:7406/railway", {
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
})


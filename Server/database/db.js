const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
})


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alkemyAbm', 'postgres', 'emiliano', {
  host: 'localhost',
  dialect: 'postgres',
});


module.exports = {
  sequelize
};
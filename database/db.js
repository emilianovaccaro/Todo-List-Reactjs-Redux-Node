const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoListDb', 'postgres', 'emiliano', {
  host: 'localhost',
  dialect: 'postgres',
});


module.exports = {
  sequelize
};
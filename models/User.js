const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');
const { Todo } = require('./Todo');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


User.hasMany( Todo, {
  foreignKey: 'userId',
  sourceKey: 'id'
});

Todo.belongsTo( User, {
  foreignKey: 'userId',
  target: 'id'
})

module.exports = {
  User
};
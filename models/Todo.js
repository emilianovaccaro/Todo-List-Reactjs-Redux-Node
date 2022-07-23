const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

//add abm model - agregar modelo de abm
const Todo = sequelize.define('todos', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  success: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})


module.exports = {
  Todo
};
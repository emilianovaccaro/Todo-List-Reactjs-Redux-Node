const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const keys = require('../config/keys');


const username = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASSWORD || 'emiliano';
const host = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(keys.databaseUrl, username, password, {
  host: host,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

/* 
host: process.env.DB_HOST, // localhost
username: process.env.DB_USER, // postgres
password: process.env.DB_PASSWORD,
port: 5432,
database: process.env.DB, // example
dialect: 'postgres',
logging: false,
dialectOptions: {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
}
}); */


module.exports = {
  sequelize
};
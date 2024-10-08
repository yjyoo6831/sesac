const dotenv = require('dotenv');
const path = require('path');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ 
  path: path.resolve(__dirname, '..', envFile)
});

const config = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.DBHOST,
    "dialect": process.env.DBDIALECT,
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.DBHOST,
    "dialect": process.env.DBDIALECT,
    "logging": console.log
  }
}

console.log(">>", config);
module.exports = config;
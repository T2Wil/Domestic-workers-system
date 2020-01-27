const  dotenv  = require('dotenv');

dotenv.config();

module.exports = {

  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_PATH,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }

  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres",
  //   "operatorsAliases": false
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres",
  //   "operatorsAliases": false
  // }
} 
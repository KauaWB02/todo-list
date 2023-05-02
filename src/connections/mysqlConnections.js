const mysql2 = require('mysql2/promise');
const {database} = require('../config/app');

const connection = mysql2.createPool({
  host: database.host,
  user: database.user,
  password: database.password,
  database: database.base,
  port: database.port,
});

module.exports = connection;

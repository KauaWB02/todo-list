const dotenv = require('dotenv').config();

const server = {
    port: process.env.SERVER_PORT || 8080,
}

const database = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    base: process.env.MYSQL_DATABASE,
    port: Number(process.env.MYSQL_PORT) || 3306,
}

module.exports = {
    server,
    database
}
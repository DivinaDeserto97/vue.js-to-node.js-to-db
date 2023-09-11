const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'testuser',
    password: '12345678',
    database: 'TestDB'
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
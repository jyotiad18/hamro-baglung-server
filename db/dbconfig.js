const mysql = require('mysql');
const config = process.env;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'sql123',
  database: 'hamrobaglung',
  port: 3306
});

connection.connect(error => { 
    if (error) {
        console.log(error);
        throw error;
    }    
});

module.exports = connection;
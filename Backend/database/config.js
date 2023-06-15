const mysql = require('mysql2');

// Create a database connection and export it from this file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root", //username imported from the config files
    password: "TOMORROWLAND2018", //password imported from the config files
    database: "comporoll" //database name imported from the config files
  });

// Connect to the database and make sure to log a message related to the connection state 

module.exports = {connection}
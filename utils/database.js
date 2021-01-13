const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'WAXD951753',
    database: 'project28'
});

//test
//pool.query('select * from anime', (err, results) => {
//    console.log(JSON.stringify(results));
//   console.log('database connection successful');
//});

module.exports = pool.promise();
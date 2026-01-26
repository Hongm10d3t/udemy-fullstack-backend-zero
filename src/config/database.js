require('dotenv').config();
const mysql = require('mysql2/promise');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'hoidanit',
//     port: 3306,
//     password: '198074'
// });

// Sử dụng pool giải quyết vấn đề quá tải truy vấn khi phát hành dự án với số lượng user lớn
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    port: 3306,
    password: '198074',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});
module.exports = connection;
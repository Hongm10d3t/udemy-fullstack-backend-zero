
// import
const express = require("express");
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
// code
const app = express() // app express
const port = process.env.PORT || 8888 // port
const hostname = process.env.HOST_NAME

// config req.body
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // config template engine
// configViewEngine(app)

// // khai báo route
// app.use('/', webRoutes)

// test connection

connection();



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});
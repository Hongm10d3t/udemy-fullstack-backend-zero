
const connection = require('../config/database');
const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users',
        function (err, results, fields) {
            users = results;
            console.log('>>>result in homePage = ', results)
            // console.log(">>>check Users:", users);
            res.send(JSON.stringify(users))
        }
    );
}
const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getHoidanit
}

const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDServices');



const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}
const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO users (email, name, city)
    VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log(">>>check results", results)
    res.send("Create new user")
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
module.exports = {
    getHomepage, getHoidanit, postCreateUser, getCreatePage
}
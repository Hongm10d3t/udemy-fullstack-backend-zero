
const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices');



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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    updateUserById(email, name, city, userId)
    // res.send("Update a user")
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user })
}
const postHandelRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    deleteUserById(userId)
    res.redirect('/')
}
module.exports = {
    getHomepage, getHoidanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandelRemoveUser
}
const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(`select * from users`);
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`select * from users where id = ?`, [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `update users
        set email = ?, name = ?, city = ?
        where id = ? `, [email, name, city, userId]
    );
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `delete from users where id = ?`, [userId]
    );
}


module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById
}
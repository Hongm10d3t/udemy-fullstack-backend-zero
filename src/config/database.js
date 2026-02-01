require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017');
        console.log("hehe thuy xinh gai")

    } catch (error) {
        console.log(">>>> Error connection DB:", error)
    }
}
module.exports = connection;
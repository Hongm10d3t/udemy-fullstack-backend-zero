const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileService");

const getUsersAPI = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    });
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    let user = await User.updateOne({ _id: userId }, {
        name: name,
        email: email,
        city: city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}
const deleteUserAPI = async (req, res) => {
    const userId = req.body.userId;
    let user = await User.deleteOne({ _id: userId })
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}
const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were upload.');
    }
    let result = await uploadSingleFile(req.files.image)
    console.log(">>>> check result", result)
    return res.status(200).json({
        EC: 0,
        data: {
            status: 'success',
            path: result.path,
            error: null
        }
    });
}

const postUploadMultipleFiles = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were upload.');
    }
    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        return await postUploadSingleFile(req, res);
    }
}
module.exports = {
    getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMultipleFiles
}
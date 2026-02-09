
const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFile);
module.exports = routerAPI;
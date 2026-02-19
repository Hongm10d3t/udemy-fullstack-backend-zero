
const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMultipleFiles } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFile);
routerAPI.post('/files', postUploadMultipleFiles);

const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer } = require('../controllers/customerController')
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteCustomer);


module.exports = routerAPI;
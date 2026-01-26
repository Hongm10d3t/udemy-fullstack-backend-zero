
const express = require('express');
const router = express.Router();
const { getHomepage, getHoidanit, postCreateUser, getCreatePage } = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/hoidanit', getHoidanit);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
module.exports = router;
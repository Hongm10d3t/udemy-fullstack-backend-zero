
const express = require('express');
const router = express.Router();
const { getHomepage, getHoidanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandelRemoveUser } = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/hoidanit', getHoidanit);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandelRemoveUser)

module.exports = router;
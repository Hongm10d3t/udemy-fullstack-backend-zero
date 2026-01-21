
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Word! update: nodemon")
})
router.get('/hoidanit', (req, res) => {
    // res.send('<h1>Hoi dan it</h1>')
    res.render('sample.ejs')
})


module.exports = router;
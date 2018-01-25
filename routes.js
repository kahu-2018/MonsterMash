const express = require('express')
//const db = require('../db')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('MONSTERSMASH!')
})

module.exports = router
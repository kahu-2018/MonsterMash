const express = require('express')
//const db = require('../db')
//var environment = process.env.NODE_ENV || 'development'
//var config = require('./knexfile')[environment]
//var db = require('knex')(config)
const router = express.Router()

router.get('/', function (req, res) {
    res.send('MONSTERSMASH!')
})

module.exports = router
const express = require('express')
const router = express.Router()
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)
var bodyParser = require('body-parser')

router.get('/', function (req, res) {
    var db= req.app.get('db')
    db('monsters')
    .then(monsters => {
        db('cities')
            .then(cities => {
                res.render('home', { monsters, cities})
            })
    })
    .catch(err => res.send("RAWR, an error!", err))
})

module.exports = router
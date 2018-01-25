const express = require('express')
const router = express.Router()
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)
var bodyParser = require('body-parser')

router.get('/', function (req, res) {

  res.render('home')
    var db= req.app.get('db')
    db('monsters')
    .then(monsters => {
        db('cities')
            .then(cities => {
                res.render('home', {monsters, cities})
            })
    })
    .catch(err => res.send("RAWR, an error!", err))
})


router.get('/profiles/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id
  db('monsters')
    .select()
    .join('cities', 'monsters.id', '=', 'cities.monster_id')
    .where('monsters.id', 'id')
    .first()
    .then((monster) => {
      // monster = {monster:"hello", img:"monster-moo.png", description:"scary"}
      res.render('profiles', monster)
    })
    .catch((err) => {
      res.send("Monsters have taken control of the server")
    })
})

module.exports = router

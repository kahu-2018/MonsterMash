const express = require('express')
//const db = require('../db')
//var environment = process.env.NODE_ENV || 'development'
//var config = require('./knexfile')[environment]
//var db = require('knex')(config)
const router = express.Router()

router.get('/', function (req, res) {
    res.send('MONSTERSMASH!')
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

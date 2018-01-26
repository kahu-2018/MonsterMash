const express = require('express')
const router = express.Router()
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile').development
var db = require('knex')(config)
var bodyParser = require('body-parser')

router.get('/', function (req, res) {
    var db = req.app.get('db')
    db('monsters')
    .then(monsters => {
        db('cities')
            .then(cities => {
                res.render('home', {monsters, cities})
            })
    })
    .catch(err => res.send("RAWR, an error!", err))
})

router.get('/attack', (req, res) => {
    var db = req.app.get('db')
    var baseUrl = req.path
    db('monsters')
    .then(monsters => {
        db('cities')
        .then (cities => {
            res.render('attack', { monsters, cities, baseUrl})
        })
    })
})


router.get('/attack/:monsterid', (req, res) => {
    var db = req.app.get('db')
    var baseUrl = req.path
    db('monsters')
    .then(monsters => {
        db('cities')
        .then (cities => {
            res.render('attack', { monsters, cities, baseUrl})
        })
    })
})

router.get('/attack/:monsterid/:cityid', (req, res) => {
    res.render('result')
})

router.post('/attack/:monsterid/:cityid', (req, res) => {
    var db = req.app.get('db')
    var cityId = req.params.city-id
    var monsterId = req.params.monster-id
    db('cities')
    .where('id', cityId)
    .update('destroyed', monsterId)
})


router.get('/profiles/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id

  db('monsters')
    .select()


    // .join('cities', 'monsters.id', '=', 'cities.monster_id')
    .where('monsters.id', id)
    .first()
    .then((monster) => {
      // monster = {monster:"hello", img:"monster-moo.png", description:"scary"}
      res.render('profiles', monster)
    })
    // .catch((err) => {
    //   res.send("Monsters have taken control of the server")
    // })
})

router.get('/cities/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id
  db('cities')
    .select()
    .join('monsters')
    .where('cities.id', id)
    .first()
    .then((city) => {

      if (city.destroyed === 0) {
        destroyed = "up for the taking"
      } else if (city.destroyed === 1) {
        destroyed = "Destroyed by The Blob"
      } else if (city.destroyed === 2) {
        destroyed = "Destroyed by Moo"
      } else if (city.destroyed === 3) {
        destroyed = "Destroyed by Maiasaura"
      } else if (city.destroyed === 4) {
        destroyed = "Destroyed by NickZilla"
      } else if (city.destroyed === 5) {
        destroyed = "Destroyed by Puffajess"
      }
      city.destroyedMessage = destroyed
      res.render('city', city)
    })
    .catch((err) => {
      console.log(err)
      res.send("Cities have taken control of the monsters")
    })
})


module.exports = router

const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')

const restController = require('../controllers/restaurant-controller')

const usercontroller = require('../controllers/user-controller')

router.use('/admin', admin)

router.get('/signup', usercontroller.signUpPage)

router.post('/signup', usercontroller.signUp)

router.get('/restaurants', restController.getRestaurants)

router.use('/', (req, res) => res.redirect('/restaurants'))

module.exports = router

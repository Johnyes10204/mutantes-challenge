var router = require('express').Router()
var personas = require('./personas')
require('dotenv').config();


router.use('/', personas)

router.get('/', function (req, res) {

  res.status(200).json({ message: process.env.USER })
})

module.exports = router
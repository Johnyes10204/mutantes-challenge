var router = require('express').Router();
var mutante = require('../controllers/persona');






router.get('/stats', function(req, res) {
    mutante.consultar(req,res)
})


router.post('/mutant', function(req, res) {
    mutante.processDna(req,res)
})

module.exports = router
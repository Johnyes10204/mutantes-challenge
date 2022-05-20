var express = require('express') //llamamos a Express
var app = express()
var router = express.Router();
var bodyParser = require('body-parser');
var router = require('./routes');
require('dotenv').config();


var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/', router)

// Inicio del  servidor
const server = app.listen(port)
console.log('API escuchando en el puerto ' + port)



module.exports = server;
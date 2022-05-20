'use strict'
/* global describe it */
var request = require('supertest')

/*obtenemos nuestra api rest que vamos a testear*/
var app = require('../app/server')

describe('Verificar dna', function() {
  it('Verificar dna de la persona', function(done) {
    request(app)
      .post('/mutant/')
      .set('Accept', 'application/json')
      .send({
        'dna' : ["XAACGAA","XAGCAAT","XATACTC","XAGATGC","DCCAATC","DTCACAG"]
      })
      .expect(403, done)
  })
})
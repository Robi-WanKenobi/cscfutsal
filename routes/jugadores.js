var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

var Jugador = require('../models/jugador');

/*GET ALL JUGADORES*/
router.get('/', function(req, res, next) {
  Jugador.find().exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX GOLEADORES CLUB*/
router.get('/max_goles_club', function(req, res, next) {
  Jugador.find(null, null, {sort: { "estadisticas.goles": -1 }}).limit(3).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET JUGADORES POR EQUIPO*/
router.get('/equipo/:equipo', function(req, res, next) {
  Jugador.find({'equipo': req.params.equipo}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/* GET JUGADOR BY ID */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  Jugador.findById(req.params.id).exec(function (err, jugador) {
    console.log(jugador);
    if (err) return next(err);
    res.json(jugador);
  });
});

module.exports = router;

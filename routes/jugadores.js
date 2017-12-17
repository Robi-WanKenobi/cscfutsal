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
  Jugador.find({ 'tipo': 'Jugador' }, null, {sort: { "estadisticas.goles": -1 }}).limit(3).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX GOLEADORES equipo*/
router.get('/max_goles/:equipo', function(req, res, next) {
  Jugador.find({$and : [ { 'equipo': req.params.equipo  }, { 'tipo': 'Jugador' } ]}, null, {sort: { "estadisticas.goles": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX ASISTENTES CLUB*/
router.get('/max_asis_club', function(req, res, next) {
  Jugador.find({ 'tipo': 'Jugador' }, null, {sort: { "estadisticas.asistencias": -1 }}).limit(3).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX ASISTENTES equipo*/
router.get('/max_asis/:equipo', function(req, res, next) {
  Jugador.find({$and : [ { 'equipo': req.params.equipo  }, { 'tipo': 'Jugador' } ]}, null, {sort: { "estadisticas.asistencias": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX AMONESTADOS CLUB*/
router.get('/max_amon_club', function(req, res, next) {
  Jugador.find({ 'tipo': 'Jugador' }, null, {sort: { "estadisticas.tarjetas": -1 }}).limit(3).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX AMONESTADOS equipo*/
router.get('/max_amon/:equipo', function(req, res, next) {
  Jugador.find({$and : [ { 'equipo': req.params.equipo  }, { 'tipo': 'Jugador' } ]}, null, {sort: { "estadisticas.tarjetas": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET JUGADORES POR EQUIPO*/
router.get('/equipo/:equipo', function(req, res, next) {
  Jugador.find({$and : [ { 'equipo': req.params.equipo  }, { 'tipo': 'Jugador' } ]}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET TECNICS POR EQUIPO*/
router.get('/tecnicos/:equipo', function(req, res, next) {
  Jugador.find({$and : [ { 'equipo': req.params.equipo  }, { 'tipo': 'Tècnic' } ]}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
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

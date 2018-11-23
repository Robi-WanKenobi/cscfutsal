//jugadores

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
  Jugador.find({$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]}, null, {sort: { "estadisticas.goles": -1 }}).limit(5).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX GOLEADORES equipo*/
router.get('/max_goles/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, {$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]} ]}, null, {sort: { "estadisticas.goles": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX ASISTENTES CLUB*/
router.get('/max_asis_club', function(req, res, next) {
  Jugador.find({$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]}, null, {sort: { "estadisticas.asistencias": -1 }}).limit(5).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX ASISTENTES equipo*/
router.get('/max_asis/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, {$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]} ]}, null, {sort: { "estadisticas.asistencias": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX AMONESTADOS CLUB*/
router.get('/max_amon_club', function(req, res, next) {
  Jugador.find({$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]}, null, {sort: { "estadisticas.tarjetas": -1 }}).limit(5).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MAX AMONESTADOS equipo*/
router.get('/max_amon/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, {$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]} ]}, null, {sort: { "estadisticas.tarjetas": -1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MIN GOLEADOS CLUB*/
router.get('/min_gol_club', function(req, res, next) {
  Jugador.find({ 'tipo': 'Porter' }, null, {sort: { "estadisticas.goles_encajados_pp": +1 }}).limit(5).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET MIN GOLEADOS equipo*/
router.get('/min_gol/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, { 'tipo': 'Porter' } ]}, null, {sort: { "estadisticas.goles_encajados_pp": +1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET JUGADORES POR EQUIPO*/
router.get('/equipo/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, {$or : [ { 'tipo': 'Jugador' }, { 'tipo': 'Porter' } ]} ]}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET TECNICS POR EQUIPO*/
router.get('/tecnicos/:equipo', function(req, res, next) {
  if (req.params.equipo === 'SeniorA') {
    equipo_search = 'Sènior A'
  }
  else if (req.params.equipo === 'SeniorB'){
    equipo_search = 'Sènior B'
  }
  else {
    equipo_search = req.params.equipo.replace(/(?=.{1}$)/,' ');
  }
  Jugador.find({$and : [ { 'equipo': equipo_search  }, { 'tipo': 'Tècnic' } ]}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
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

var express = require('express');
var router = express.Router();
var fs = require('fs');
var bcrypt = require('bcrypt');
var Jugador = require('../models/jugador');
var Admin = require('../models/admin');
var jwt = require('../services/jwt');
var md_auth = require('../middlewares/authenticated');

/*LOGIN*/
router.post('/login', function(req, res) {

  var params = req.body;
  var usuario = params.usuario;
  var password = params.password;

    Admin.findOne({usuario: usuario}).exec(function (err, admin) {
      if (err) {
        res.status(500).send({message: 'Error al iniciar sesión'})
      }else{
        if(admin){
          bcrypt.compare(password, admin.password ,function(err, check){
            if(check){
              res.status(200).send({
                token: jwt.createToken(admin)
              });
            }else{
              res.status(404).send({message: 'Contraseña incorrecta'})
            }
          })
        }else{
          res.status(404).send({message: 'Usuario incorrecto'});
        }
      }
    });
});

/*router.post('/login', function(req, res) {

  var admin = new Admin();

  var params = req.body;
  if(params.usuario && params.password){
    admin.usuario = params.usuario;
    admin.password = params.password;

    bcrypt.hash(params.password, 10, function (err, hash) {
      admin.password = hash;
        Admin.create(admin, function (err, admin) {
          if (err) return next(err);
          res.json(admin);
        });
    })
  }
});*/

/*router.delete('/login/:id', function(req, res, next) {
  Admin.findByIdAndRemove(req.params.id, req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});*/


/*GET ALL JUGADORES*/
router.get('/', md_auth.ensureAuth, function(req, res, next) {
  Jugador.find().exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET JUGADORES POR EQUIPO*/
router.get('/:equipo', function(req, res, next) {
  Jugador.find({'equipo': req.params.equipo}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/* GET JUGADOR BY ID */
router.get('/:id', function(req, res, next) {
  Jugador.findById(req.params.id).exec(function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

/* SAVE JUGADOR */
router.post('/',md_auth.ensureAuth, function(req, res) {
  Jugador.create(req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

/* DELETE JUGADOR */
router.delete('/:id', md_auth.ensureAuth, function(req, res, next) {
  Jugador.findByIdAndRemove(req.params.id, req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

/* UPDATE JUGADOR */
router.put('/:id', md_auth.ensureAuth, function(req, res, next) {
  Jugador.findByIdAndUpdate(req.params.id, req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

module.exports = router;

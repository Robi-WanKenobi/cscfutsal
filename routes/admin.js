var express = require('express');
var router = express.Router();
var fs = require('fs');
var bcrypt = require('bcrypt');
var Jugador = require('../models/jugador');
var Admin = require('../models/admin');
var jwt = require('../services/jwt');
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './public/plantillas'});




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
              res.status(200).jsonp({
                user: check,
                token: jwt.createToken(admin),
                role: "csc_admin"
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
router.get('/jugadores', md_auth.ensureAuth, function(req, res, next) {
  Jugador.find().exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/*GET JUGADORES POR EQUIPO*/
router.get('/jugadores/equipo/:equipo', function(req, res, next) {
  Jugador.find({'equipo': req.params.equipo}, null, {sort: {dorsal: 1 }}).exec(function (err, jugadores) {
    if (err) return next(err);
    res.json(jugadores);
  });
});

/* GET JUGADOR BY ID */
router.get('/jugadores/:id', function(req, res, next) {
  console.log(req.params.id);
  Jugador.findById(req.params.id).exec(function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

router.post('/image/:id', [md_auth.ensureAuth, md_upload], function (req, res) {

  var jugador = req.params.id;
  var file_name = 'No subido';


  if(req.files){
    var file_path = req.files.image.path;
    var file_split = file_path.split('\\');
    var file_name = file_split[2];
    var ext_split = file_path.split('\.');
    var file_ext = ext_split[1];

    console.log(file_path +" "+ file_name);

    if(file_ext === 'png' || file_ext === 'jpg' || file_ext === 'jpeg'){
      Jugador.findByIdAndUpdate(jugador, {imagen: file_name}, {new: true}, function (err, act) {
        if (err){
          res.status(500).send({message: 'Error al actualizar el jugador'})
        }else {
          if (!act){
            res.status(404).send({message: 'No se ha podido actualizar al jugador'})
          }else{
            res.status(200).send({jugador: act})
          }
        }
      })
    }else {
      res.status(300).send({message: 'Extensión no valida'});
    }
  }else{
    res.status(500).send({message: 'No se ha subido el archivo'})
  }

    //res.status(200).send({path: file_path, split: file_split, name: file_name, ext: file_ext})
});

/* SAVE JUGADOR */
router.post('/jugadores/', md_auth.ensureAuth, function(req, res) {
  Jugador.create(req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

/* DELETE JUGADOR */
router.delete('/jugadores/:id', md_auth.ensureAuth, function(req, res, next) {
  Jugador.findByIdAndRemove(req.params.id, req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

/* UPDATE JUGADOR */
router.put('/jugadores/:id', md_auth.ensureAuth, function(req, res, next) {
  Jugador.findByIdAndUpdate(req.params.id, req.body, function (err, jugador) {
    if (err) return next(err);
    res.json(jugador);
  });
});

module.exports = router;

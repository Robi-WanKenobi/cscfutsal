//partidos


var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Cronica = require('../models/cronica');

var seniorA_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-';
var seniorB_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-segona-divisio-catalana-futbol-sala/grup-5/jornada-';
var juvenilA_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-4/jornada-';
var juvenilB_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-3/jornada-';
var cadete_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-tercera-divisio-cadet-futbol-sala/grup-3/jornada-';

/* Get JORNADA ACTUAL */
router.get('/jornada/actual', function(req, res, next) {

  var jornada = {};

  jornada = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2';
  request(jornada, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('#select_jornada').filter(function () {
        jornada = parseInt(($(this).find('option:selected').text()).match(/\d+/)[0]) -1;
      });
        console.log('Jornada actual: '+ jornada);
        res.json(jornada);
      }
  });

});

/* Get JORNADA PROXIMA */
router.get('/jornada/proxima', function(req, res, next) {

  var jornada = {};

  jornada = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2';
  request(jornada, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('#select_jornada').filter(function () {
        jornada = parseInt(($(this).find('option:selected').text()).match(/\d+/)[0]);
      });
      console.log('Jornada próxima: ' +jornada);
      res.json(jornada);
    }
  });

});


/* GET PARTIDOS*/
router.get('/:equipo/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  var enlace_equipo;
  var nameToSearchFor;

  if (req.params.equipo === 'SeniorA') {
    enlace_equipo = seniorA_res+req.params.jornada;
    nameToSearchFor = 'CSC FUTSAL,A';
  }

  if (req.params.equipo === 'SeniorB') {
    enlace_equipo = seniorB_res+req.params.jornada;
    nameToSearchFor = 'CSC FUTSAL,B';
  }

  if (req.params.equipo === 'JuvenilA') {
    enlace_equipo = juvenilA_res+req.params.jornada;
    nameToSearchFor = 'CSC FUTSAL,A';
  }

  if (req.params.equipo === 'JuvenilB') {
    enlace_equipo = juvenilB_res+req.params.jornada;
    nameToSearchFor = 'CSC FUTSAL,B';
  }

  if (req.params.equipo === 'CadetA') {
    enlace_equipo = cadete_res+req.params.jornada;
    nameToSearchFor = 'CSC FUTSAL ,A';
  }

  request(enlace_equipo, function(error, response, html) {
    if (!error && response.statusCode === 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function(i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: "",
          lugar: ""
        };

        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });

      for(var index = 0; index < json.length; index++)
      {
        if((json[index].local === nameToSearchFor)||(json[index].visitante === nameToSearchFor))
        {
          //console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});


/*GET CRONICA POR EQUIPO Y JORNADA*/
router.get('/cronica/:equipo/:jornada', function(req, res, next) {
  Cronica.find( {$and: [ { equipo: req.params.equipo }, { jornada: req.params.jornada} ]}).populate('goleadores.jugador').populate('asistentes.jugador')
    .populate('amarillas.jugador').populate('rojas.jugador').exec(function(err, cronica) {
    if (err) return next(err);
    res.json(cronica);
  });
});

module.exports = router;

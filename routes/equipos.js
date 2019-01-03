//equipos

var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var num_jornada = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-divisio-honor-catalana-futbol-sala/grup-2';

var seniorA_clas = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-';
var seniorA_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-';
var seniorA_cal = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2';

var seniorB_clas = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-segona-divisio-catalana-futbol-sala/grup-5/jornada-';
var seniorB_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-segona-divisio-catalana-futbol-sala/grup-5/jornada-';
var seniorB_cal = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-segona-divisio-catalana-futbol-sala/grup-5';

var juvenilA_clas = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-4/jornada-';
var juvenilA_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-4/jornada-';
var juvenilA_cal = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-4';

var juvenilB_clas = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-3/jornada-';
var juvenilB_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-3/jornada-';
var juvenilB_cal = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-3';

var cadete_clas = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-tercera-divisio-cadet-futbol-sala/grup-3/jornada-';
var cadete_res = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-tercera-divisio-cadet-futbol-sala/grup-3/jornada-';
var cadete_cal = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-tercera-divisio-cadet-futbol-sala/grup-3';

/* Get JORNADA ACTUAL */
router.get('/jornada/actual', function(req, res, next) {

  var jornada = {};
  
  request(num_jornada, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('#select_jornada').filter(function () {
        jornada = parseInt(($(this).find('option:selected').text()).match(/\d+/)[0]);
      });
      console.log(jornada);
      res.json(jornada);
    }
  });

});

/* GET CLASIFICACIONES*/
router.get('/clasificacion/:equipo/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};
  var enlace_equipo;

  if (req.params.equipo === 'SeniorA') {
    enlace_equipo = seniorA_clas+req.params.jornada;
  }

  if (req.params.equipo === 'SeniorB') {
    enlace_equipo = seniorB_clas+req.params.jornada;
  }

  if (req.params.equipo === 'JuvenilA') {
    enlace_equipo = juvenilA_clas+req.params.jornada;
  }

  if (req.params.equipo === 'JuvenilB') {
    enlace_equipo = juvenilB_clas+req.params.jornada;
  }

  if (req.params.equipo === 'CadetA') {
    var jornada_cadete = parseInt(req.params.jornada) + parseInt(3);
    enlace_equipo = cadete_clas+jornada_cadete;
  }

  request(enlace_equipo, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable-e tbody tr').each(function(i, element) {
        equipo = {
          posicion: "",
          nombre: "",
          puntos: "",
          jugados: "",
          partidos: {
            ganados: "",
            empatados: "",
            perdidos: ""
          },
          goles: {
            favor: "",
            contra: ""
          }
        };
        equipo.posicion = $(this).find('td:nth-child(1)').text();
        equipo.nombre = $(this).find('td:nth-child(4)').text();
        equipo.puntos = $(this).find('td:nth-child(5)').text();
        equipo.jugados = $(this).find('td:nth-child(6)').text();
        equipo.partidos.ganados = $(this).find('td:nth-child(7)').text();
        equipo.partidos.empatados = $(this).find('td:nth-child(8)').text();
        equipo.partidos.perdidos = $(this).find('td:nth-child(9)').text();
        equipo.goles.favor = $(this).find('td:nth-child(18)').text();
        equipo.goles.contra = $(this).find('td:nth-child(19)').text();
        json.push(equipo);
      });
      res.json(json);
    }
  });
});

/* GET RESULTADOS*/
router.get('/resultados/:equipo/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  var enlace_equipo;

  if (req.params.equipo === 'SeniorA') {
    enlace_equipo = seniorA_res+req.params.jornada;
  }

  if (req.params.equipo === 'SeniorB') {
    enlace_equipo = seniorB_res+req.params.jornada;
  }

  if (req.params.equipo === 'JuvenilA') {
    enlace_equipo = juvenilA_res+req.params.jornada;
  }

  if (req.params.equipo === 'JuvenilB') {
    enlace_equipo = juvenilB_res+req.params.jornada;
  }

  if (req.params.equipo === 'CadetA') {
    var jornada_cadete = parseInt(req.params.jornada) + parseInt(3);
    enlace_equipo = cadete_res+jornada_cadete;
  }

  request(enlace_equipo, function(error, response, html) {
    if (!error && response.statusCode == 200) {
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
      res.json(json);
    }
  });
});

/* GET CALENDARIOS*/
router.get('/calendario/:equipo', function(req, res, next) {

  var json = [];
  var jornada = {};

  var enlace_equipo;

  if (req.params.equipo === 'SeniorA') {
    enlace_equipo = seniorA_cal;
  }

  if (req.params.equipo === 'SeniorB') {
    enlace_equipo = seniorB_cal;
  }

  if (req.params.equipo === 'JuvenilA') {
    enlace_equipo = juvenilA_cal;
  }

  if (req.params.equipo === 'JuvenilB') {
    enlace_equipo = juvenilB_cal;
  }

  if (req.params.equipo === 'CadetA') {
    enlace_equipo = cadete_cal;
  }

  request(enlace_equipo, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.calendaritable').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
     
        jornada.numero = $(this).find('thead tr th:first-child').text();
        jornada.fecha = $(this).find('thead tr th:last-child').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            res_local: "",
            res_visitante: ""
          };

          partido.local = $(this).find('td:first-child a').text();
          partido.visitante = $(this).find('td:last-child a').text();
          partido.res_local = $(this).find('td:nth-child(3)').text();
          partido.res_visitante = $(this).find('td:nth-child(5)').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      res.json(json);
    }
  });
});

module.exports = router;

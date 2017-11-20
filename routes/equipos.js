var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/* Get JORNADA ACTUAL */
router.get('/jornada/actual', function(req, res, next) {

  var jornada = {};

  jornada = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-divisio-honor-catalana-futbol-sala/grup-2';
  request(jornada, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('#select_jornada').filter(function () {
        jornada = parseInt(($(this).find('option:selected').text()).match(/\d+/)[0]);
      });
      console.log(jornada);
      res.json(jornada);
    }
    //console.log(JSON.stringify(json))
  });

});

/* GET clasificacion Senior A*/
router.get('/clasificacion', function(req, res, next) {

  var json = [];
  var equipo = {};

  seniorA = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-divisio-honor-catalana-futbol-sala/grup-2';
  request(seniorA, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

        $('table.fcftable-comp tbody tr').each(function(i, element) {
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
      console.log(json);
      res.json(json);
    }
  });
});

/* GET resultados Senior A*/
router.get('/resultados/seniorA/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  seniorA = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-divisio-honor-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
  request(seniorA, function(error, response, html) {
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

module.exports = router;

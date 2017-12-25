var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Cronica = require('../models/cronica');

/* Get JORNADA ACTUAL */
router.get('/jornada/actual', function(req, res, next) {

  var jornada = {};

  jornada = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-divisio-honor-catalana-futbol-sala/grup-2';
  request(jornada, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('#select_jornada').filter(function () {
        jornada = parseInt(($(this).find('option:selected').text()).match(/\d+/)[0]) - 1;
      });
        console.log(jornada);
        res.json(jornada);
      }
      //console.log(JSON.stringify(json))
  });

});

/* Get JORNADA PROXIMA */
router.get('/jornada/proxima', function(req, res, next) {

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


/* GET ultimos partidos Senior A*/
router.get('/seniorA/:jornada', function(req, res, next) {

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
      //console.log(JSON.stringify(json));
      var nameToSearchFor = 'CSC FUTSAL,A';

      for(var index = 0; index < json.length; index++)
      {
        if((json[index].local === nameToSearchFor)||(json[index].visitante === nameToSearchFor))
        {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* GET ultimos partidos Senior B*/
router.get('/seniorB/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: ""
  };

  seniorB = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
  request(seniorB, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function (i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: ""
        };
        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });
      //console.log(JSON.stringify(json));
      var nameToSearchFor = 'CSC FUTSAL,B';

      for (var index = 0; index < json.length; index++) {
        if ((json[index].local === nameToSearchFor) || (json[index].visitante === nameToSearchFor)) {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* GET ultimos partidos Senior C*/
router.get('/seniorC/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: ""
  };

  seniorB = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-catalana-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(seniorB, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function (i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: ""
        };
        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });
      //console.log(JSON.stringify(json));
      var nameToSearchFor = 'CSC FUTSAL  ,C';
      console.log(json);
      for (var index = 0; index < json.length; index++) {
        if ((json[index].local === nameToSearchFor) || (json[index].visitante === nameToSearchFor)) {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* GET ultimos partidos Juvenil A*/
router.get('/juvenilA/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: ""
  };

  juvenilA = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-3/jornada-'+req.params.jornada;
  request(juvenilA, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function (i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: ""
        };
        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });
      //console.log(json);
      var nameToSearchFor = 'CSC FUTSAL,A';
      console.log(json);
      for (var index = 0; index < json.length; index++) {
        if ((json[index].local === nameToSearchFor) || (json[index].visitante === nameToSearchFor)) {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* GET ultimos partidos Juvenil B*/
router.get('/juvenilB/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: ""
  };

  juvenilB = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(juvenilB, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function (i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: ""
        };
        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });
      //console.log(json);
      var nameToSearchFor = 'CSC FUTSAL,B';
      console.log(json);
      for (var index = 0; index < json.length; index++) {
        if ((json[index].local === nameToSearchFor) || (json[index].visitante === nameToSearchFor)) {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* GET ultimos partidos Juvenil C*/
router.get('/juvenilC/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: ""
  };

  juvenilC = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-7/jornada-'+req.params.jornada;
  request(juvenilC, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr.linia').each(function (i, element) {
        partido = {
          local: "",
          visitante: "",
          resultado: "",
          fecha: ""
        };
        partido.local = $(this).find('td.p-5.resultats-w-equip.tr a').text();
        partido.visitante = $(this).find('tr.linia td.p-5.resultats-w-equip.tl a').text();
        partido.resultado = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-17').text();
        partido.fecha = $(this).find('tr.linia td.p-5.resultats-w-resultat.tc a div.tc.fs-9').text();
        partido.lugar = $(this).find('tr.linia td.p-5.resultats-w-text2.tr.fs-9 a').text();
        json.push(partido);
      });
      //console.log(json);
      var nameToSearchFor = 'CSC FUTSAL ,C';
      console.log(json);
      for (var index = 0; index < json.length; index++) {
        if ((json[index].local === nameToSearchFor) || (json[index].visitante === nameToSearchFor)) {
          console.log(json[index]);
          res.json(json[index]);
        }
      }
    }
  });
});

/* CREATE CRONICA */
router.get('/cronica/:id', function(req, res) {
  Cronica.findById(req.param.id).populate('goleadores').populate('asistentes')
    .populate('amonestados.amarillas').populate('amonestados.rojas').exec(function(err, cronica) {
    if (err) return next(err);
    res.json(cronica);
  });
});

module.exports = router;

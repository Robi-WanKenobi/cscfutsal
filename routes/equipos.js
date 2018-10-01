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
router.get('/clasificacion/S%C3%A8nior%20A/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  seniorA = 'http://fcf.cat/classificacio/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
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
router.get('/resultados/S%C3%A8nior%20A/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  seniorA = 'http://fcf.cat/resultats/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
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

/* GET calendario Senior A*/
router.get('/calendario/S%C3%A8nior%20A', function(req, res, next) {

  var json = [];
  var jornada = {};

  seniorA = 'http://fcf.cat/calendari/1819/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2';
  request(seniorA, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td a').get(0).text();
          console.log(partido.local);
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

/* GET clasificacion Senior B*/
router.get('/clasificacion/S%C3%A8nior%20B/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  seniorB = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
  request(seniorB, function(error, response, html) {
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

/* GET resultados Senior B*/
router.get('/resultados/S%C3%A8nior%20B/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  seniorB = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2/jornada-'+req.params.jornada;
  request(seniorB, function(error, response, html) {
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

/* GET calendario Senior B*/
router.get('/calendario/S%C3%A8nior%20B', function(req, res, next) {

  var json = [];
  var jornada = {};

  seniorB = 'http://fcf.cat/calendari/1718/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/grup-2';
  request(seniorB, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td.tr a').text();
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

/* GET clasificacion Senior C*/
router.get('/clasificacion/S%C3%A8nior%20C/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  seniorC = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-tercera-divisio-catalana-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(seniorC, function(error, response, html) {
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

/* GET resultados Senior C*/
router.get('/resultados/S%C3%A8nior%20C/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  seniorC = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-catalana-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(seniorC, function(error, response, html) {
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

/* GET calendario Senior C*/
router.get('/calendario/S%C3%A8nior%20C', function(req, res, next) {

  var json = [];
  var jornada = {};

  seniorC = 'http://fcf.cat/calendari/1718/futbol-sala/lliga-tercera-divisio-catalana-futbol-sala/grup-6';
  request(seniorC, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td.tr a').text();
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

/* GET clasificacion Juvenil A*/
router.get('/clasificacion/Juvenil%20A/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  juvenilA = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-3/jornada-'+req.params.jornada;
  request(juvenilA, function(error, response, html) {
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

/* GET resultados Juvenil A*/
router.get('/resultados/Juvenil%20A/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  juvenilA = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-3/jornada-'+req.params.jornada;
  request(juvenilA, function(error, response, html) {
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

/* GET calendario Juvenil A*/
router.get('/calendario/Juvenil%20A', function(req, res, next) {

  var json = [];
  var jornada = {};

  juvenilA = 'http://fcf.cat/calendari/1718/futbol-sala/lliga-segona-divisio-juvenil-futbol-sala/grup-3';
  request(juvenilA, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td.tr a').text();
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

/* GET clasificacion Juvenil B*/
router.get('/clasificacion/Juvenil%20B/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  juvenilB = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(juvenilB, function(error, response, html) {
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

/* GET resultados Juvenil B*/
router.get('/resultados/Juvenil%20B/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  juvenilB = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-6/jornada-'+req.params.jornada;
  request(juvenilB, function(error, response, html) {
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

/* GET calendario Juvenil B*/
router.get('/calendario/Juvenil%20B', function(req, res, next) {

  var json = [];
  var jornada = {};

  juvenilB = 'http://fcf.cat/calendari/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-6';
  request(juvenilB, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td.tr a').text();
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

/* GET clasificacion Juvenil C*/
router.get('/clasificacion/Juvenil%20C/:jornada', function(req, res, next) {

  var json = [];
  var equipo = {};

  juvenilC = 'http://fcf.cat/classificacio/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-7/jornada-'+req.params.jornada;
  request(juvenilC, function(error, response, html) {
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

/* GET resultados Juvenil C*/
router.get('/resultados/Juvenil%20C/:jornada', function(req, res, next) {

  var json = [];
  var partido = {
    local: "",
    visitante: "",
    resultado: "",
    fecha: "",
    lugar: ""
  };

  juvenilC = 'http://fcf.cat/resultats/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-7/jornada-'+req.params.jornada;
  request(juvenilC, function(error, response, html) {
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

/* GET calendario Juvenil C*/
router.get('/calendario/Juvenil%20C', function(req, res, next) {

  var json = [];
  var jornada = {};

  juvenilC = 'http://fcf.cat/calendari/1718/futbol-sala/lliga-tercera-divisio-juvenil-futbol-sala/grup-7';
  request(juvenilC, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      $('table.fcftable.w-100.mb-20').each(function(i, element) {
        jornada = {
          numero: "",
          fecha: "",
          partidos: []
        };
        jornada.numero = $(this).find('thead tr th span.f-l').text();
        jornada.fecha = $(this).find('thead tr span.f-r').text();

        $(this).find('tbody tr').each(function (i, e) {
          partido = {
            local: "",
            visitante: "",
            resultado: ""
          };

          partido.local = $(this).find('td.tr a').text();
          partido.visitante = $(this).find('td.tl a').text();
          partido.resultado = $(this).find('td.tc a').text();
          jornada.partidos.push(partido);
        });
        json.push(jornada);
      });
      console.log(json);
      res.json(json);
    }
  });
});

module.exports = router;

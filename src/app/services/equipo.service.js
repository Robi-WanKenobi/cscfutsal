"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var EquipoService = (function () {
    function EquipoService(http) {
        this.http = http;
    }
    EquipoService.prototype.getJornadaActual = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('equipos/jornada/actual')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getJugadores = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('jugadores/equipo/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getTecnics = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('jugadores/tecnicos/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getClasificacion = function (equipo, jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('equipos/clasificacion/' + equipo + '/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getResultados = function (equipo, jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('equipos/resultados/' + equipo + '/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getCalendario = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('equipos/calendario/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getMaxGols = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_goles/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getMinGol = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/min_gol/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getMaxAsis = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_asis/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EquipoService.prototype.getMaxAmon = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_amon/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return EquipoService;
}());
EquipoService = __decorate([
    core_1.Injectable()
], EquipoService);
exports.EquipoService = EquipoService;

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
var PartidosService = (function () {
    function PartidosService(http) {
        this.http = http;
    }
    PartidosService.prototype.getJornadaActual = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/jornada/actual')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getJornadaProxima = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/jornada/proxima')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoSeniorA = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/seniorA/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoSeniorB = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/seniorB/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoSeniorC = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/seniorC/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoJuvenilA = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/juvenilA/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoJuvenilB = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/juvenilB/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartidosService.prototype.getPartidoJuvenilC = function (jornada) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('partidos/juvenilC/' + jornada)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return PartidosService;
}());
PartidosService = __decorate([
    core_1.Injectable()
], PartidosService);
exports.PartidosService = PartidosService;

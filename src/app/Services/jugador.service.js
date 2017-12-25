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
var JugadorService = (function () {
    function JugadorService(http) {
        this.http = http;
    }
    JugadorService.prototype.getAllJugadores = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JugadorService.prototype.getMaxGolsClub = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_goles_club')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JugadorService.prototype.getMinGolClub = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/min_gol_club')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JugadorService.prototype.getMaxAsisClub = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_asis_club')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JugadorService.prototype.getMaxAmonClub = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/max_amon_club')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JugadorService.prototype.getJugador = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/jugadores/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return JugadorService;
}());
JugadorService = __decorate([
    core_1.Injectable()
], JugadorService);
exports.JugadorService = JugadorService;

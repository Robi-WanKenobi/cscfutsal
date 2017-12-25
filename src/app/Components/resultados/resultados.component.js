"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ResultadosComponent = (function () {
    function ResultadosComponent(equipoService, route) {
        this.equipoService = equipoService;
        this.route = route;
    }
    ResultadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.queryParams.forEach(function (params) {
            _this.equipo = params['cat'];
            if (_this.equipo === 'Infantil A') {
                _this.infantil = true;
            }
            else {
                _this.infantil = false;
                _this.setJornadaActual(_this.equipo);
            }
        });
    };
    ResultadosComponent.prototype.setJornadaActual = function (equipo) {
        var _this = this;
        this.equipoService.getJornadaActual().then(function (res) {
            _this.actual = res;
            _this.getResultados(equipo, res);
            _this.getClasificacion(equipo, res);
        }, function (err) {
            console.log(err);
        });
    };
    ResultadosComponent.prototype.getResultados = function (equipo, jornada) {
        var _this = this;
        this.equipoService.getResultados(equipo, jornada).then(function (res) {
            _this.loading = false;
            _this.jornada = res;
        }, function (err) {
            console.log(err);
        });
    };
    ResultadosComponent.prototype.getClasificacion = function (equipo, jornada) {
        var _this = this;
        this.equipoService.getClasificacion(equipo, jornada).then(function (res) {
            _this.loading = false;
            _this.clasificacion = res;
        }, function (err) {
            console.log(err);
        });
    };
    ResultadosComponent.prototype.upJornada = function () {
        if (parseInt(this.actual.toString(), 10) > 30) {
            this.actual = 30;
        }
        else {
            this.loading = true;
            this.actual = parseInt(this.actual.toString(), 10) + 1;
            this.getResultados(this.equipo, this.actual);
            this.getClasificacion(this.equipo, this.actual);
        }
    };
    ResultadosComponent.prototype.downJornada = function () {
        if (parseInt(this.actual.toString(), 10) <= 1) {
            this.actual = 1;
        }
        else {
            this.loading = true;
            this.actual = parseInt(this.actual.toString(), 10) - 1;
            this.getResultados(this.equipo, this.actual);
            this.getClasificacion(this.equipo, this.actual);
        }
    };
    return ResultadosComponent;
}());
__decorate([
    core_1.Input()
], ResultadosComponent.prototype, "infantil", void 0);
ResultadosComponent = __decorate([
    core_1.Component({
        selector: 'app-resultados',
        templateUrl: './resultados.component.html',
        styleUrls: ['./resultados.component.css']
    })
], ResultadosComponent);
exports.ResultadosComponent = ResultadosComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UltimosPartidosComponent = (function () {
    function UltimosPartidosComponent(partidosService) {
        this.partidosService = partidosService;
    }
    UltimosPartidosComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.setJornadaActual();
    };
    UltimosPartidosComponent.prototype.setJornadaActual = function () {
        var _this = this;
        this.partidosService.getJornadaActual().then(function (res) {
            _this.loading = false;
            _this.getLastSeniorAPartido(res);
            _this.getLastSeniorBPartido(res);
            _this.getLastSeniorCPartido(res);
            _this.getLastJuvenilAPartido(res);
            _this.getLastJuvenilBPartido(res);
            _this.getLastJuvenilCPartido(res);
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastSeniorAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorA(jornada).then(function (res) {
            _this.partidoSeniorA = res;
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastSeniorBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorB(jornada).then(function (res) {
            _this.partidoSeniorB = res;
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastSeniorCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorC(jornada).then(function (res) {
            _this.partidoSeniorC = res;
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastJuvenilAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilA(jornada).then(function (res) {
            _this.partidoJuvenilA = res;
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastJuvenilBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilB(jornada).then(function (res) {
            _this.partidoJuvenilB = res;
        }, function (err) {
            console.log(err);
        });
    };
    UltimosPartidosComponent.prototype.getLastJuvenilCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilC(jornada).then(function (res) {
            _this.partidoJuvenilC = res;
        }, function (err) {
            console.log(err);
        });
    };
    return UltimosPartidosComponent;
}());
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoSeniorA", void 0);
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoSeniorB", void 0);
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoSeniorC", void 0);
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoJuvenilA", void 0);
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoJuvenilB", void 0);
__decorate([
    core_1.Input()
], UltimosPartidosComponent.prototype, "partidoJuvenilC", void 0);
UltimosPartidosComponent = __decorate([
    core_1.Component({
        selector: 'app-ultimos-partidos',
        templateUrl: './ultimos-partidos.component.html',
        styleUrls: ['./ultimos-partidos.component.css']
    })
], UltimosPartidosComponent);
exports.UltimosPartidosComponent = UltimosPartidosComponent;

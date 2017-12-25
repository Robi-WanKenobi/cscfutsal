"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProximosPartidosComponent = (function () {
    function ProximosPartidosComponent(partidosService) {
        this.partidosService = partidosService;
    }
    ProximosPartidosComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.setNextJornada();
    };
    ProximosPartidosComponent.prototype.setNextJornada = function () {
        var _this = this;
        this.partidosService.getJornadaProxima().then(function (res) {
            _this.loading = false;
            _this.getNextSeniorAPartido(res);
            _this.getNextSeniorBPartido(res);
            _this.getNextSeniorCPartido(res);
            _this.getNextJuvenilAPartido(res);
            _this.getNextJuvenilBPartido(res);
            _this.getNextJuvenilCPartido(res);
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextSeniorAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorA(jornada).then(function (res) {
            _this.partidoSeniorA = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextSeniorBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorB(jornada).then(function (res) {
            _this.partidoSeniorB = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextSeniorCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorC(jornada).then(function (res) {
            _this.partidoSeniorC = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextJuvenilAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilA(jornada).then(function (res) {
            _this.partidoJuvenilA = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextJuvenilBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilB(jornada).then(function (res) {
            _this.partidoJuvenilB = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProximosPartidosComponent.prototype.getNextJuvenilCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilC(jornada).then(function (res) {
            _this.partidoJuvenilC = res;
        }, function (err) {
            console.log(err);
        });
    };
    return ProximosPartidosComponent;
}());
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoSeniorA", void 0);
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoSeniorB", void 0);
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoSeniorC", void 0);
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoJuvenilA", void 0);
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoJuvenilB", void 0);
__decorate([
    core_1.Input()
], ProximosPartidosComponent.prototype, "partidoJuvenilC", void 0);
ProximosPartidosComponent = __decorate([
    core_1.Component({
        selector: 'app-proximos-partidos',
        templateUrl: './proximos-partidos.component.html',
        styleUrls: ['./proximos-partidos.component.css']
    })
], ProximosPartidosComponent);
exports.ProximosPartidosComponent = ProximosPartidosComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminPlantillaComponent = (function () {
    function AdminPlantillaComponent(adminService, equipoService, router) {
        this.adminService = adminService;
        this.equipoService = equipoService;
        this.router = router;
    }
    AdminPlantillaComponent.prototype.ngOnInit = function () {
        this.getJugadoresSeniorA();
        this.getJugadoresSeniorB();
        this.getJugadoresSeniorC();
        this.getJugadoresJuvenilA();
        this.getJugadoresJuvenilB();
        this.getJugadoresJuvenilC();
        this.getJugadoresInfantilA();
    };
    AdminPlantillaComponent.prototype.getJugadoresSeniorA = function () {
        var _this = this;
        this.adminService.getJugadores('Sènior A').then(function (res) {
            _this.seniorA = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresSeniorB = function () {
        var _this = this;
        this.adminService.getJugadores('Sènior B').then(function (res) {
            _this.seniorB = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresSeniorC = function () {
        var _this = this;
        this.adminService.getJugadores('Sènior C').then(function (res) {
            _this.seniorC = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresJuvenilA = function () {
        var _this = this;
        this.adminService.getJugadores('Juvenil A').then(function (res) {
            _this.juvenilA = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresJuvenilB = function () {
        var _this = this;
        this.adminService.getJugadores('Juvenil B').then(function (res) {
            _this.juvenilB = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresJuvenilC = function () {
        var _this = this;
        this.adminService.getJugadores('Juvenil C').then(function (res) {
            _this.juvenilC = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.getJugadoresInfantilA = function () {
        var _this = this;
        this.adminService.getJugadores('Infantil A').then(function (res) {
            _this.infantilA = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminPlantillaComponent.prototype.deleteJugador = function (id) {
        var _this = this;
        this.status = 'borrado';
        this.adminService.deleteJugador(id).then(function (result) {
            setTimeout(function () { _this.status = ''; }, 1000);
            setTimeout(function () { _this.ngOnInit(); }, 1000);
        }, function (err) {
            console.log(err);
        });
    };
    return AdminPlantillaComponent;
}());
AdminPlantillaComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-plantilla',
        templateUrl: './admin-plantilla.component.html',
        styleUrls: ['./admin-plantilla.component.css']
    })
], AdminPlantillaComponent);
exports.AdminPlantillaComponent = AdminPlantillaComponent;

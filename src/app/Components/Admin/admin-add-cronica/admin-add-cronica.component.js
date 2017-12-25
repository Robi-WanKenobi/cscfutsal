"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminAddCronicaComponent = (function () {
    function AdminAddCronicaComponent(partidosService, equipoService, adminService) {
        this.partidosService = partidosService;
        this.equipoService = equipoService;
        this.adminService = adminService;
    }
    AdminAddCronicaComponent.prototype.ngOnInit = function () {
    };
    AdminAddCronicaComponent.prototype.saveCronica = function () {
        var _this = this;
        this.adminService.saveCronica({ 'equipo': this.equipo, 'jornada': this.jornada,
            'local': this.partido['local'], 'visitante': this.partido['visitante'], 'resultado': this.partido['resultado']
        }).then(function (res) {
            _this.status = 'creada';
            _this.cronica_id = res['_id'];
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getJugadores = function (equipo) {
        var _this = this;
        this.equipoService.getJugadores(equipo).then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getPartido = function () {
        this.getJugadores(this.equipo);
        if (this.equipo === 'Sènior A') {
            this.getSeniorAPartido(this.jornada);
        }
        if (this.equipo === 'Sènior B') {
            this.getSeniorBPartido(this.jornada);
        }
        if (this.equipo === 'Sènior C') {
            this.getSeniorCPartido(this.jornada);
        }
        if (this.equipo === 'Juvenil A') {
            this.getJuvenilAPartido(this.jornada);
        }
        if (this.equipo === 'Juvenil B') {
            this.getJuvenilBPartido(this.jornada);
        }
        if (this.equipo === 'Juvenil C') {
            this.getJuvenilCPartido(this.jornada);
        }
    };
    AdminAddCronicaComponent.prototype.toGoles = function (idjugador) {
        this.adminService.addToGols(this.cronica_id, idjugador).then(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.toAsis = function (idjugador) {
    };
    AdminAddCronicaComponent.prototype.toAmar = function (idjugador) {
    };
    AdminAddCronicaComponent.prototype.toRojas = function (idjugador) {
    };
    AdminAddCronicaComponent.prototype.getSeniorAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorA(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getSeniorBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorB(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getSeniorCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoSeniorC(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getJuvenilAPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilA(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getJuvenilBPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilB(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminAddCronicaComponent.prototype.getJuvenilCPartido = function (jornada) {
        var _this = this;
        this.partidosService.getPartidoJuvenilC(jornada).then(function (res) {
            _this.partido = res;
        }, function (err) {
            console.log(err);
        });
    };
    return AdminAddCronicaComponent;
}());
AdminAddCronicaComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-add-cronica',
        templateUrl: './admin-add-cronica.component.html',
        styleUrls: ['./admin-add-cronica.component.css']
    })
], AdminAddCronicaComponent);
exports.AdminAddCronicaComponent = AdminAddCronicaComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jugador_1 = require("../../../Models/jugador");
var AdminAddJugadorComponent = (function () {
    function AdminAddJugadorComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.jugador = new jugador_1.Jugador();
    }
    AdminAddJugadorComponent.prototype.ngOnInit = function () {
    };
    AdminAddJugadorComponent.prototype.submitJugador = function () {
        var _this = this;
        this.adminService.saveJugador(this.jugador).then(function (res) {
            _this.status = 'success';
            var id = res['_id'];
            setTimeout(function () { _this.router.navigate(['/edit', id]); }, 1000);
        }, function (err) {
            console.log(err);
            _this.status = 'error';
        });
    };
    return AdminAddJugadorComponent;
}());
AdminAddJugadorComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-add-jugador',
        templateUrl: './admin-add-jugador.component.html',
        styleUrls: ['./admin-add-jugador.component.css']
    })
], AdminAddJugadorComponent);
exports.AdminAddJugadorComponent = AdminAddJugadorComponent;

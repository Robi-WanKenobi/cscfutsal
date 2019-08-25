"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminEditJugadorComponent = (function () {
    function AdminEditJugadorComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
    }
    AdminEditJugadorComponent.prototype.ngOnInit = function () {
        this.getJugador(this.route.snapshot.params['id']);
    };
    AdminEditJugadorComponent.prototype.getJugador = function (id) {
        var _this = this;
        this.adminService.getJugador(id).then(function (res) {
            _this.jugador = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdminEditJugadorComponent.prototype.updateDatosJugador = function (id) {
        var _this = this;
        this.adminService.updateJugador(id, this.jugador).then(function (res) {
            _this.datos_status = 'success';
            setTimeout(function () { _this.datos_status = ''; }, 1000);
        }, function (err) {
            console.log(err);
            _this.datos_status = 'error';
            setTimeout(function () { _this.datos_status = ''; }, 1000);
        });
    };
    AdminEditJugadorComponent.prototype.updateJugador = function (id) {
        var _this = this;
        this.adminService.updateJugador(id, this.jugador).then(function (res) {
            _this.status = 'success';
            setTimeout(function () { _this.status = ''; }, 1000);
        }, function (err) {
            console.log(err);
            _this.status = 'error';
            setTimeout(function () { _this.status = ''; }, 1000);
        });
    };
    AdminEditJugadorComponent.prototype.uploadImage = function (id) {
        var _this = this;
        this.adminService.uploadImage(id, this.imagen).then(function (res) {
            _this.image_status = 'success';
            setTimeout(function () { _this.image_status = ''; }, 1000);
            setTimeout(function () { _this.getJugador(id); }, 500);
        }, function (err) {
            console.log(err);
            _this.image_status = 'error';
            setTimeout(function () { _this.image_status = ''; }, 1000);
        });
    };
    AdminEditJugadorComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('image', file, file.name);
            this.imagen = formData;
        }
        else {
        }
    };
    return AdminEditJugadorComponent;
}());
AdminEditJugadorComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-edit-jugador',
        templateUrl: './admin-edit-jugador.component.html',
        styleUrls: ['./admin-edit-jugador.component.css']
    })
], AdminEditJugadorComponent);
exports.AdminEditJugadorComponent = AdminEditJugadorComponent;

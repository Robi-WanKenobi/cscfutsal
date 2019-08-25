"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    AdminService.prototype.Login = function (admin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/login', admin)
                .map(function (res) {
                // If request fails, throw an Error that will be caught
                if (res.status === 500) {
                    throw new Error('Error al iniciar sesió');
                }
                if (res.status === 404) {
                    throw new Error('Dades incorrectes');
                }
                // If everything went fine, return the response
                if (res.status === 200) {
                    var data = res.json();
                    if (data.token) {
                        return data;
                    }
                }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.getAllJugadores = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get('/admin/jugadores', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.getJugadores = function (equipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('admin/jugadores/equipo/' + equipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.getJugador = function (id) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get('/admin/jugadores/' + id, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.saveJugador = function (data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/jugadores/', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.updateJugador = function (id, data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.put('/admin/jugadores/' + id, data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.uploadImage = function (id, image) {
        var _this = this;
        var headers = new http_1.Headers({ 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/image/' + id, image, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.deleteJugador = function (id) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.delete('/admin/jugadores/' + id, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.saveCronica = function (data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/cronicas/', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.addToGols = function (id, idjugador) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/' + id + '/goleadores/' + idjugador, null, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.addToAsis = function (id, idjugador) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/' + id + '/asistentes/' + idjugador, null, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.addToAmarillas = function (id, idjugador) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/' + id + '/amarillas/' + idjugador, null, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminService.prototype.addToRojas = function (id, idjugador) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post('/admin/' + id + '/rojas/' + idjugador, null, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable()
], AdminService);
exports.AdminService = AdminService;

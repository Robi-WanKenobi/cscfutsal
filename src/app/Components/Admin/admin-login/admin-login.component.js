"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminLoginComponent = (function () {
    function AdminLoginComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.adminService.Login({ 'usuario': this.usuario, 'password': this.password }).then(function (res) {
            _this.data = res;
            localStorage.setItem('token', _this.data['token']);
            localStorage.setItem('role', _this.data['role']);
            _this.status = 'success';
            setTimeout(function () { _this.status = ''; }, 1500);
            setTimeout(function () { _this.router.navigate(['admin']); }, 1500);
        }, function (err) {
            console.log(err);
            _this.status = 'error';
            setTimeout(function () { _this.status = ''; }, 1500);
        });
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-login',
        templateUrl: './admin-login.component.html',
        styleUrls: ['./admin-login.component.css']
    })
], AdminLoginComponent);
exports.AdminLoginComponent = AdminLoginComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaxAsisClubComponent = (function () {
    function MaxAsisClubComponent(jugadoresService) {
        this.jugadoresService = jugadoresService;
    }
    MaxAsisClubComponent.prototype.ngOnInit = function () {
        this.getMaxAsisClub();
    };
    MaxAsisClubComponent.prototype.getMaxAsisClub = function () {
        var _this = this;
        this.jugadoresService.getMaxAsisClub().then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MaxAsisClubComponent;
}());
MaxAsisClubComponent = __decorate([
    core_1.Component({
        selector: 'app-max-asis-club',
        templateUrl: './max-asis-club.component.html',
        styleUrls: ['./max-asis-club.component.css']
    })
], MaxAsisClubComponent);
exports.MaxAsisClubComponent = MaxAsisClubComponent;

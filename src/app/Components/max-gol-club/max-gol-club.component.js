"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaxGolClubComponent = (function () {
    function MaxGolClubComponent(jugadoresService) {
        this.jugadoresService = jugadoresService;
    }
    MaxGolClubComponent.prototype.ngOnInit = function () {
        this.getMaxGolesClub();
    };
    MaxGolClubComponent.prototype.getMaxGolesClub = function () {
        var _this = this;
        this.jugadoresService.getMaxGolsClub().then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MaxGolClubComponent;
}());
MaxGolClubComponent = __decorate([
    core_1.Component({
        selector: 'app-max-gol-club',
        templateUrl: './max-gol-club.component.html',
        styleUrls: ['./max-gol-club.component.css']
    })
], MaxGolClubComponent);
exports.MaxGolClubComponent = MaxGolClubComponent;

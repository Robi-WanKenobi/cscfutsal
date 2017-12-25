"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MinGolClubComponent = (function () {
    function MinGolClubComponent(jugadoresService) {
        this.jugadoresService = jugadoresService;
    }
    MinGolClubComponent.prototype.ngOnInit = function () {
        this.getMinGolClub();
    };
    MinGolClubComponent.prototype.getMinGolClub = function () {
        var _this = this;
        this.jugadoresService.getMinGolClub().then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MinGolClubComponent;
}());
MinGolClubComponent = __decorate([
    core_1.Component({
        selector: 'app-min-gol-club',
        templateUrl: './min-gol-club.component.html',
        styleUrls: ['./min-gol-club.component.css']
    })
], MinGolClubComponent);
exports.MinGolClubComponent = MinGolClubComponent;

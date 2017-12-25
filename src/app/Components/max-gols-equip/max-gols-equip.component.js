"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaxGolsEquipComponent = (function () {
    function MaxGolsEquipComponent(equipoService, route) {
        this.equipoService = equipoService;
        this.route = route;
    }
    MaxGolsEquipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.equipo = params['cat'];
            _this.getMaxGols(_this.equipo);
        });
    };
    MaxGolsEquipComponent.prototype.getMaxGols = function (equipo) {
        var _this = this;
        this.equipoService.getMaxGols(equipo).then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MaxGolsEquipComponent;
}());
MaxGolsEquipComponent = __decorate([
    core_1.Component({
        selector: 'app-max-gols-equip',
        templateUrl: './max-gols-equip.component.html',
        styleUrls: ['./max-gols-equip.component.css']
    })
], MaxGolsEquipComponent);
exports.MaxGolsEquipComponent = MaxGolsEquipComponent;

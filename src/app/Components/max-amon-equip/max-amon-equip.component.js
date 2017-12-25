"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaxAmonEquipComponent = (function () {
    function MaxAmonEquipComponent(equipoService, route) {
        this.equipoService = equipoService;
        this.route = route;
    }
    MaxAmonEquipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.equipo = params['cat'];
            _this.getMaxAmon(_this.equipo);
        });
    };
    MaxAmonEquipComponent.prototype.getMaxAmon = function (equipo) {
        var _this = this;
        this.equipoService.getMaxAmon(equipo).then(function (res) {
            _this.jugadores = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MaxAmonEquipComponent;
}());
MaxAmonEquipComponent = __decorate([
    core_1.Component({
        selector: 'app-max-amon-equip',
        templateUrl: './max-amon-equip.component.html',
        styleUrls: ['./max-amon-equip.component.css']
    })
], MaxAmonEquipComponent);
exports.MaxAmonEquipComponent = MaxAmonEquipComponent;

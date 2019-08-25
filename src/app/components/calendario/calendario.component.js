"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CalendarioComponent = (function () {
    function CalendarioComponent(equipoService, route) {
        this.equipoService = equipoService;
        this.route = route;
        this.calendario_1 = new Array();
        this.calendario_2 = new Array();
    }
    CalendarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.equipo = params['cat'];
            if (_this.equipo === 'Infantil A') {
                _this.infantil = true;
            }
            else {
                _this.infantil = false;
                _this.getCalendario(_this.equipo);
            }
        });
    };
    CalendarioComponent.prototype.getCalendario = function (equipo) {
        var _this = this;
        this.equipoService.getCalendario(equipo).then(function (res) {
            _this.calendario = res;
            for (var i = 0; i < _this.calendario.length / 2; i++) {
                _this.calendario_1.push(_this.calendario[i]);
            }
            for (var i = _this.calendario.length / 2; i < _this.calendario.length; i++) {
                _this.calendario_2.push(_this.calendario[i]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return CalendarioComponent;
}());
__decorate([
    core_1.Input()
], CalendarioComponent.prototype, "infantil", void 0);
CalendarioComponent = __decorate([
    core_1.Component({
        selector: 'app-calendario',
        templateUrl: './calendario.component.html',
        styleUrls: ['./calendario.component.css']
    })
], CalendarioComponent);
exports.CalendarioComponent = CalendarioComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FooterSortidaComponent = (function () {
    function FooterSortidaComponent(router) {
        this.router = router;
    }
    FooterSortidaComponent.prototype.ngOnInit = function () {
    };
    FooterSortidaComponent.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { _this.router.navigate(['/inici']); }, 1000);
    };
    FooterSortidaComponent.prototype.toMenu = function () {
        this.router.navigate(['/admin']);
    };
    return FooterSortidaComponent;
}());
FooterSortidaComponent = __decorate([
    core_1.Component({
        selector: 'app-footer-sortida',
        templateUrl: './footer-sortida.component.html',
        styleUrls: ['./footer-sortida.component.css']
    })
], FooterSortidaComponent);
exports.FooterSortidaComponent = FooterSortidaComponent;

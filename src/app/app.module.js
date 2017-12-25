"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var partidos_service_1 = require("./Services/partidos.service");
var equipo_service_1 = require("./Services/equipo.service");
var app_component_1 = require("./app.component");
var inicio_component_1 = require("./Layouts/inicio/inicio.component");
var ultimos_partidos_component_1 = require("./Components/ultimos-partidos/ultimos-partidos.component");
var proximos_partidos_component_1 = require("./Components/proximos-partidos/proximos-partidos.component");
var contacto_component_1 = require("./Layouts/contacto/contacto.component");
var plantilla_component_1 = require("./Components/plantilla/plantilla.component");
var equipo_component_1 = require("./Layouts/equipo/equipo.component");
var resultados_component_1 = require("./Components/resultados/resultados.component");
var jugador_service_1 = require("./Services/jugador.service");
var admin_service_1 = require("./Services/admin.service");
var admin_login_component_1 = require("./Components/Admin/admin-login/admin-login.component");
var admin_component_1 = require("./Layouts/admin/admin.component");
var auth_guard_1 = require("./Guard/auth.guard");
var admin_plantilla_component_1 = require("./Layouts/admin-plantilla/admin-plantilla.component");
var calendario_component_1 = require("./Components/calendario/calendario.component");
var max_gol_club_component_1 = require("./Components/max-gol-club/max-gol-club.component");
var loader_component_1 = require("./shared/loader/loader.component");
var loader2_component_1 = require("./shared/loader2/loader2.component");
var max_asis_club_component_1 = require("./Components/max-asis-club/max-asis-club.component");
var max_amon_club_component_1 = require("./Components/max-amon-club/max-amon-club.component");
var admin_add_jugador_component_1 = require("./Components/Admin/admin-add-jugador/admin-add-jugador.component");
var footer_acceso_component_1 = require("./tools/footer-acceso/footer-acceso.component");
var footer_sortida_component_1 = require("./tools/footer-sortida/footer-sortida.component");
var admin_edit_jugador_component_1 = require("./Components/Admin/admin-edit-jugador/admin-edit-jugador.component");
var max_gols_equip_component_1 = require("./Components/max-gols-equip/max-gols-equip.component");
var max_asis_equip_component_1 = require("./Components/max-asis-equip/max-asis-equip.component");
var max_amon_equip_component_1 = require("./Components/max-amon-equip/max-amon-equip.component");
var equipaciones_component_1 = require("./Layouts/equipaciones/equipaciones.component");
var instalaciones_component_1 = require("./Layouts/instalaciones/instalaciones.component");
var min_gol_club_component_1 = require("./Components/min-gol-club/min-gol-club.component");
var min_gol_equip_component_1 = require("./Components/min-gol-equip/min-gol-equip.component");
var cronica_component_1 = require("./Components/cronica/cronica.component");
var admin_cronicas_component_1 = require("./Layouts/admin-cronicas/admin-cronicas.component");
var admin_add_cronica_component_1 = require("./Components/Admin/admin-add-cronica/admin-add-cronica.component");
var appRoutes = [
    { path: '', redirectTo: 'inici', pathMatch: 'full' },
    { path: 'inici', component: inicio_component_1.InicioComponent },
    { path: 'contacte', component: contacto_component_1.ContactoComponent },
    { path: 'equipacions', component: equipaciones_component_1.EquipacionesComponent },
    { path: 'instalacions', component: instalaciones_component_1.InstalacionesComponent },
    { path: 'equip', component: equipo_component_1.EquipoComponent },
    { path: 'login', component: admin_login_component_1.AdminLoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'admin-plantilles', component: admin_plantilla_component_1.AdminPlantillaComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'admin-croniques', component: admin_cronicas_component_1.AdminCronicasComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'edit/:id', component: admin_edit_jugador_component_1.AdminEditJugadorComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            inicio_component_1.InicioComponent,
            ultimos_partidos_component_1.UltimosPartidosComponent,
            proximos_partidos_component_1.ProximosPartidosComponent,
            contacto_component_1.ContactoComponent,
            plantilla_component_1.PlantillaComponent,
            equipo_component_1.EquipoComponent,
            resultados_component_1.ResultadosComponent,
            admin_login_component_1.AdminLoginComponent,
            admin_component_1.AdminComponent,
            admin_plantilla_component_1.AdminPlantillaComponent,
            calendario_component_1.CalendarioComponent,
            max_gol_club_component_1.MaxGolClubComponent,
            loader_component_1.LoaderComponent,
            loader2_component_1.Loader2Component,
            max_asis_club_component_1.MaxAsisClubComponent,
            max_amon_club_component_1.MaxAmonClubComponent,
            admin_add_jugador_component_1.AdminAddJugadorComponent,
            footer_acceso_component_1.FooterAccesoComponent,
            footer_sortida_component_1.FooterSortidaComponent,
            admin_edit_jugador_component_1.AdminEditJugadorComponent,
            max_gols_equip_component_1.MaxGolsEquipComponent,
            max_asis_equip_component_1.MaxAsisEquipComponent,
            max_amon_equip_component_1.MaxAmonEquipComponent,
            equipaciones_component_1.EquipacionesComponent,
            instalaciones_component_1.InstalacionesComponent,
            min_gol_club_component_1.MinGolClubComponent,
            min_gol_equip_component_1.MinGolEquipComponent,
            cronica_component_1.CronicaComponent,
            admin_cronicas_component_1.AdminCronicasComponent,
            admin_add_cronica_component_1.AdminAddCronicaComponent,
        ],
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)],
        providers: [partidos_service_1.PartidosService, equipo_service_1.EquipoService, admin_service_1.AdminService, jugador_service_1.JugadorService, auth_guard_1.AuthGuard,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

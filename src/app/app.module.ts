import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PartidosService} from './Services/partidos.service';
import { EquipoService} from "./Services/equipo.service";

import { AppComponent } from './app.component';
import { InicioComponent } from './Layouts/inicio/inicio.component';
import { UltimosPartidosComponent } from './Components/ultimos-partidos/ultimos-partidos.component';
import { ProximosPartidosComponent } from './Components/proximos-partidos/proximos-partidos.component';
import { ContactoComponent } from './Layouts/contacto/contacto.component';
import { PlantillaComponent } from './Components/plantilla/plantilla.component';
import { EquipoComponent } from './Layouts/equipo/equipo.component';
import { ResultadosComponent } from './Components/resultados/resultados.component';
import {JugadorService} from "./Services/jugador.service";
import {AdminService} from "./Services/admin.service";
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { AdminComponent } from './Layouts/admin/admin.component';
import {AuthGuard} from "./Guard/auth.guard";
import { AdminPlantillaComponent } from './Components/Admin/admin-plantilla/admin-plantilla.component';
import { CalendarioComponent } from './Components/calendario/calendario.component';
import { MaxGolClubComponent } from './Components/max-gol-club/max-gol-club.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Loader2Component } from './shared/loader2/loader2.component';
import { MaxAsisClubComponent } from './Components/max-asis-club/max-asis-club.component';
import { MaxAmonClubComponent } from './Components/max-amon-club/max-amon-club.component';
import { AdminAddJugadorComponent } from './Components/Admin/admin-add-jugador/admin-add-jugador.component';
import { FooterAccesoComponent } from './tools/footer-acceso/footer-acceso.component';
import { FooterSortidaComponent } from './tools/footer-sortida/footer-sortida.component';
import { AdminEditJugadorComponent } from './Components/Admin/admin-edit-jugador/admin-edit-jugador.component';
import { MaxGolsEquipComponent } from './Components/max-gols-equip/max-gols-equip.component';
import { MaxAsisEquipComponent } from './Components/max-asis-equip/max-asis-equip.component';
import { MaxAmonEquipComponent } from './Components/max-amon-equip/max-amon-equip.component';
import { EquipacionesComponent } from './Layouts/equipaciones/equipaciones.component';
import { InstalacionesComponent} from "./Layouts/instalaciones/instalaciones.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  { path: 'inici', component: InicioComponent },
  { path: 'contacte', component: ContactoComponent},
  { path: 'equipacions', component: EquipacionesComponent},
  { path: 'instalacions', component: InstalacionesComponent},
  { path: 'equip', component: EquipoComponent},
  { path: 'login', component: AdminLoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: AdminEditJugadorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UltimosPartidosComponent,
    ProximosPartidosComponent,
    ContactoComponent,
    PlantillaComponent,
    EquipoComponent,
    ResultadosComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminPlantillaComponent,
    CalendarioComponent,
    MaxGolClubComponent,
    LoaderComponent,
    Loader2Component,
    MaxAsisClubComponent,
    MaxAmonClubComponent,
    AdminAddJugadorComponent,
    FooterAccesoComponent,
    FooterSortidaComponent,
    AdminEditJugadorComponent,
    MaxGolsEquipComponent,
    MaxAsisEquipComponent,
    MaxAmonEquipComponent,
    EquipacionesComponent,
    InstalacionesComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)],
  providers: [PartidosService, EquipoService, AdminService, JugadorService, AuthGuard,
     {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

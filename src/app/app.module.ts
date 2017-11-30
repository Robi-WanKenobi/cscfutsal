import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy} from '@angular/common';

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
import { JugadorDetailsComponent } from './Components/jugador-details/jugador-details.component';
import { AdminPlantillaComponent } from './Components/Admin/admin-plantilla/admin-plantilla.component';
import { CalendarioComponent } from './Components/calendario/calendario.component';
import { MaxGolClubComponent } from './Components/max-gol-club/max-gol-club.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Loader2Component } from './shared/loader2/loader2.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  { path: 'inici', component: InicioComponent },
  { path: 'contacte', component: ContactoComponent},
  { path: 'equip', component: EquipoComponent},
  { path: 'jugador/:id', component: JugadorDetailsComponent},
  { path: 'login', component: AdminLoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
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
    JugadorDetailsComponent,
    AdminPlantillaComponent,
    CalendarioComponent,
    MaxGolClubComponent,
    LoaderComponent,
    Loader2Component
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

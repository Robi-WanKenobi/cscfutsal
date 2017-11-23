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
import { ClasificacionComponent } from './Components/clasificacion/clasificacion.component';
import { ResultadosComponent } from './Components/resultados/resultados.component';
import {JugadorService} from "./Services/jugador.service";
import {AdminService} from "./Services/admin.service";
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { AdminComponent } from './Layouts/admin/admin.component';
import {AuthGuard} from "./Guard/auth.guard";


const appRoutes: Routes = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  { path: 'inici', component: InicioComponent },
  { path: 'contacte', component: ContactoComponent},
  { path: 'equip', component: EquipoComponent},
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
    ClasificacionComponent,
    ResultadosComponent,
    AdminLoginComponent,
    AdminComponent
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

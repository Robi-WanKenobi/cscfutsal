import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EquipoService } from './services/equipo.service';
import { JugadorService } from './services/jugador.service';
import { AdminService } from './services/admin.service';
import { CronicaService } from './services/cronica.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { ContactoComponent } from './layouts/contacto/contacto.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { EquipoComponent } from './layouts/equipo/equipo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthGuard} from './guard/auth.guard';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Loader2Component } from './shared/loader2/loader2.component';
import { AdminAddJugadorComponent } from './components/Admin/admin-add-jugador/admin-add-jugador.component';
import { FooterAccesoComponent } from './tools/footer-acceso/footer-acceso.component';
import { FooterSortidaComponent } from './tools/footer-sortida/footer-sortida.component';
import { AdminEditJugadorComponent } from './components/Admin/admin-edit-jugador/admin-edit-jugador.component';
import { EquipacionesComponent } from './layouts/equipaciones/equipaciones.component';
import { InstalacionesComponent} from './layouts/instalaciones/instalaciones.component';
import { AdminCronicasComponent } from './layouts/admin-cronicas/admin-cronicas.component';
import { AdminAddCronicaComponent } from './components/Admin/admin-add-cronica/admin-add-cronica.component';
import { AdminEditCronicaComponent } from './components/Admin/admin-edit-cronica/admin-edit-cronica.component';
import { AdminStatsComponent } from './layouts/admin-stats/admin-stats.component';
import { InicioPartidosComponent } from './components/inicio-partidos/inicio-partidos.component';
import { NavigationComponent } from './tools/navigation/navigation.component';
import { AdminEquiposComponent } from './layouts/admin-equipos/admin-equipos.component';
import { AdminAddEquipoComponent } from './components/Admin/admin-add-equipo/admin-add-equipo.component';
import { StatsClubComponent } from './components/stats-club/stats-club.component';
import { StatsEquipoComponent } from './components/stats-equipo/stats-equipo.component';
import { FilterStatsPipe } from './tools/pipes/filter-stats.pipe';
import { SortStatsPipe } from './tools/pipes/sort-stats.pipe';


const appRoutes: Routes = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  { path: 'inici', component: InicioComponent },
  { path: 'contacte', component: ContactoComponent},
  { path: 'equipacions', component: EquipacionesComponent},
  { path: 'instalacions', component: InstalacionesComponent},
  { path: 'equip', component: EquipoComponent},
  { path: 'login', component: AdminLoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'admin/admin-equips', component: AdminEquiposComponent, canActivate: [AuthGuard]},
  { path: 'admin/admin-croniques', component: AdminCronicasComponent, canActivate: [AuthGuard]},
  { path: 'admin/admin-stats', component: AdminStatsComponent, canActivate: [AuthGuard]},
  { path: 'admin/add-jugador', component: AdminAddJugadorComponent, canActivate: [AuthGuard]},
  { path: 'admin/add-equipo', component: AdminAddEquipoComponent, canActivate: [AuthGuard]},
  { path: 'admin/add-cronica', component: AdminAddCronicaComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit-jugador/:id', component: AdminEditJugadorComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit-equipo/:id', component: AdminAddEquipoComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit-cronica/:id', component: AdminEditCronicaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PlantillaComponent,
    EquipoComponent,
    ResultadosComponent,
    AdminLoginComponent,
    AdminComponent,
    CalendarioComponent,
    LoaderComponent,
    Loader2Component,
    AdminAddJugadorComponent,
    FooterAccesoComponent,
    FooterSortidaComponent,
    AdminEditJugadorComponent,
    EquipacionesComponent,
    InstalacionesComponent,
    AdminCronicasComponent,
    AdminAddCronicaComponent,
    AdminEditCronicaComponent,
    AdminStatsComponent,
    InicioPartidosComponent,
    NavigationComponent,
    AdminEquiposComponent,
    AdminAddEquipoComponent,
    StatsClubComponent,
    StatsEquipoComponent,
    FilterStatsPipe,
    SortStatsPipe,
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    DndModule,
    RouterModule.forRoot(appRoutes)],
  providers: [EquipoService, AdminService, JugadorService, CronicaService, AuthGuard,
     {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
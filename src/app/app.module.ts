import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PartidosService} from './Services/partidos.service';
import { JugadoresService } from './Services/jugadores.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './Layouts/inicio/inicio.component';
import { UltimosPartidosComponent } from './Components/ultimos-partidos/ultimos-partidos.component';
import { ProximosPartidosComponent } from './Components/proximos-partidos/proximos-partidos.component';
import { ContactoComponent } from './Layouts/contacto/contacto.component';
import { PlantillaComponent } from './Components/plantilla/plantilla.component';
import { EquipoComponent } from './Layouts/equipo/equipo.component';


const ROUTES = [
  { path: '', redirectTo: 'inici', pathMatch: 'full' },
  { path: 'inici', component: InicioComponent },
  { path: 'contacte', component: ContactoComponent},
  { path: 'equip', component: EquipoComponent}
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
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)],
  providers: [PartidosService, JugadoresService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

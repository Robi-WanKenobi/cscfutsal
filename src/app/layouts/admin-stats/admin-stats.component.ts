import { Component, OnInit } from '@angular/core';
import { AdminService} from '../../services/admin.service';
import {EquipoService} from '../../services/equipo.service';
import {Router} from '@angular/router';
import {JugadorService} from '../../services/jugador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {

  equipos: {};

  loading: boolean;

  constructor(private equipoService: EquipoService,
              private jugadorService: JugadorService) {
  }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquipos().then((res) => {
      this.equipos = res;
    }, (err) => {
      console.log(err);
    });
  }

  popSave() {
    Swal.fire({
      type: 'success',
      title: 'Actualitzades',
      text: 'Les estadístiques s\'han actualitzat correctament'
    })  
  }

  updateJugador(j) {
    this.loading = true;
    this.jugadorService.updateJugador(j._id, j).then((res) => {
      this.loading = false;
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Revisa els valors de les estadístiques'
      }) 
    });
  }
}

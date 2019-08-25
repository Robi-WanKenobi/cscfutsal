import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { JugadorService } from '../../../services/jugador.service';
import { EquipoService } from '../../../services/equipo.service';
import { Jugador } from '../../../models/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-jugador',
  templateUrl: './admin-add-jugador.component.html',
  styleUrls: ['./admin-add-jugador.component.css']
})
export class AdminAddJugadorComponent implements OnInit {

  jugador: Jugador;
  equipo = "";

  constructor(private equipoService: EquipoService,
              private jugadorService: JugadorService,
              private router: Router,
              private route:  ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['equipo'];
    });
  }

  submitJugador() {
    this.jugadorService.saveJugador(this.jugador).then((res) => {
      const id = res['_id'];
      this.equipoService.addJugadorToEquipo(this.equipo, id).then((res) => {
      Swal.fire({
        type: 'success',
        title: 'Afegit',
        text: 'El jugador s\'ha creat correctament'
      })      
      setTimeout(() => {this.router.navigate(['/admin/edit-jugador', id]); }, 1000);
      },
      (err) => {
        console.log(err);
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'S\'ha produït un error en afegit el jugador a l\'equip'
        })  
      });
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'S\'ha produït un error en afegit el jugador a la base de dades'
      })
    });
  }
}

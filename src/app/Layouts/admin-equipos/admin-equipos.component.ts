import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../Services/jugador.service';
import { Router } from '@angular/router';
import { EquipoService } from '../../Services/equipo.service';
import { DndDropEvent } from 'ngx-drag-drop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-equipos',
  templateUrl: './admin-equipos.component.html',
  styleUrls: ['./admin-equipos.component.css']
})
export class AdminEquiposComponent implements OnInit {

  public equipos: {};
  public equipoOrigen;
  public jugadorId;

  constructor(private equipoService: EquipoService,
              private jugadorService: JugadorService,
              private router: Router) { }

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

  draggable = {
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };
  
  onDragStart(data) {
    this.equipoOrigen = data.equipo;
    this.jugadorId = data.jugador;
  }
  
  onDrop(equipo) {
    if (this.equipoOrigen !== equipo) {
      let equipoOrigen = this.equipoOrigen;
      let jugadorId = this.jugadorId;
      this.switchTeam(equipoOrigen, equipo, jugadorId)
    }
    this.equipoOrigen = "";
    this.jugadorId = "";
  }

  switchTeam(equipoOrigen, equipoDestino, jugadorId) {
    this.equipoService.addJugadorToEquipo(equipoDestino, jugadorId).then((res) => {
      this.equipoService.removeJugadorFromEquipo(equipoOrigen, jugadorId).then((res) => {
        this.getEquipos();
      },
      (err) => {
        console.log(err);
    });
      },
      (err) => {
        console.log(err);
    });
  }

  addJugador(idequipo) {
    this.router.navigate(['/admin/add-jugador'],{queryParams: {equipo: idequipo}});
  }

  deleteJugador(id, idequipo) {
    Swal.fire({
      title: 'Estàs segur?',
      text: "El jugador serà el·liminat permanentment",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancel·lar'
    }).then((result) => {
      if (result.value) {
        this.jugadorService.deleteJugador(id, idequipo).then((res) => {
            Swal.fire(
              'Eliminat!',
              'El jugador s\'ha el·liminat correctament',
              'success'
            )
            this.getEquipos();
        }, (err) => {
          console.log(err);
          Swal.fire(
            'Error',
            'S\'ha produït un error en el·liminar al jugador',
            'error'
          )
        });
      } 
    })
  }
}


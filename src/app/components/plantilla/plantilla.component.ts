import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { EquipoService} from '../../services/equipo.service';
import {JugadorService} from '../../services/jugador.service';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  @Input() equipo: string;
  jugadores: {}[];
  tecnicos: {}[];

  constructor(private equipoService: EquipoService) {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.equipo) {
      this.getJugadores(this.equipo);
    this.getTecnicos(this.equipo);
    }
  }

  getJugadores(equipo) {
    this.equipoService.getJugadores(equipo).then((res) => {
      this.jugadores = res['jugadores'];
    }, (err) => {
      console.log(err);
    });
  }

  getTecnicos(equipo) {
    this.equipoService.getTecnicos(equipo).then((res) => {
      this.tecnicos = res['jugadores'];
    }, (err) => {
      console.log(err);
    });
  }
}

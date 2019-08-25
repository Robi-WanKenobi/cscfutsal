import {Component, Input, OnInit} from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Partido } from '../../models/models';

@Component({
  selector: 'app-inicio-partidos',
  templateUrl: './inicio-partidos.component.html',
  styleUrls: ['./inicio-partidos.component.css']
})

export class InicioPartidosComponent implements OnInit {

  @Input() title: string;
  @Input() key: string;
  @Input() jornada: number;

  selectedEquipo;
  equipos: {};
  loading: boolean;
  partido: Partido;

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.jornada) {
      if (this.jornada !== 0) {
        this.loading = true;
        this.getEquipos();
      }
    }
  }

  getEquipos() {
    this.equipoService.getEquipos().then((res) => {
      this.equipos = res;
      this.selectedEquipo = res[0]['_id'];
      this.getPartidoJornada(this.selectedEquipo, this.jornada);
    }, (err) => {
      console.log(err);
    });
  }

  switchEquipo(){
    this.loading = true;
    this.getPartidoJornada(this.selectedEquipo, this.jornada);
  }
  
  getPartidoJornada(equipoId, jornada) {
    this.equipoService.getPartido(equipoId, jornada).then((res) => {
      this.partido = new Partido(
        res['local'],
        res['fecha'],
        res['resultado'],
        res['lugar'],
        res['visitante'],
      );
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }
}

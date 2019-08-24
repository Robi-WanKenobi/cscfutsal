import {Component, Input, OnInit} from '@angular/core';
import { EquipoService } from '../../Services/equipo.service';

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
  partido : {}

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.loading = true;
  }

  ngOnChanges(){
    if (this.jornada) {
      this.getEquipos();
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
      this.partido = res;
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stats-equipo',
  templateUrl: './stats-equipo.component.html',
  styleUrls: ['./stats-equipo.component.css']
})
export class StatsEquipoComponent implements OnInit {

  @Input() equipo: string;
  jugadores: {}[];
  searchText: string;
  property: string = "estadisticas";
  subproperty: string = "goles_pp";
  direction: number = -1;

  constructor(private equipoService: EquipoService) {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.equipo) {
      this.getJugadores(this.equipo);
    }
  }

  getJugadores(equipo) {
    this.equipoService.getJugadores(equipo).then((res) => {
      this.jugadores = res['jugadores'];
    }, (err) => {
      console.log(err);
    });
  }

  sortByMinGol() {
    this.searchText = "Porter";
    this.property = "estadisticas";
    this.subproperty = "goles_encajados_pp";
  }

  sortByGol() {
    if (this.searchText === "Porter") {
      this.searchText = "";
    }
    this.property = "estadisticas";
    this.subproperty = "goles_pp"
  }

  sortByAsis() {
    if (this.searchText === "Porter") {
      this.searchText = "";
    }
    this.property = "estadisticas";
    this.subproperty = "asistencias_pp";
  }

  sortByAmon() {
    if (this.searchText === "Porter") {
      this.searchText = "";
    }
    this.property = "estadisticas";
    this.subproperty = "tarjetas";
  }
}

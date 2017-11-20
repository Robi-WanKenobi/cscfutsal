import { Component, OnInit } from '@angular/core';
import { EquipoService} from "../../Services/equipo.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  jornada: any;

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.setJornadaActual();
  }

  setJornadaActual() {
    this.equipoService.getJornadaActual().then((res) => {
      console.log(res);
      this.getSeniorAResultados(res);
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorAResultados(jornada) {
    this.equipoService.getResultados(jornada).then((res) => {
      this.jornada = res;
      console.log(jornada);
    }, (err) => {
      console.log(err);
    });
  }
}



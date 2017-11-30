import { Component, OnInit } from '@angular/core';
import { EquipoService} from "../../Services/equipo.service";
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  equipo: string;
  clasificacion: any;
  jornada: any;
  actual: {};
  loading: boolean;

  constructor(private equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      console.log(this.equipo);
      this.setJornadaActual(this.equipo);
    });
  }

  setJornadaActual(equipo) {
    this.equipoService.getJornadaActual().then((res) => {
      console.log(res);
      this.actual = res;
      this.getResultados(equipo, res);
      this.getClasificacion(equipo, res);
    }, (err) => {
      console.log(err);
    });
  }

  getResultados(equipo, jornada) {
    this.equipoService.getResultados(equipo , jornada).then((res) => {
      this.loading = false;
      this.jornada = res;
      console.log(jornada);
    }, (err) => {
      console.log(err);
    });
  }

  getClasificacion(equipo, jornada) {
    this.equipoService.getClasificacion(equipo, jornada).then((res) => {
      this.loading = false;
      this.clasificacion = res;
    }, (err) => {
      console.log(err);
    });
  }

  upJornada() {
    if (parseInt(this.actual.toString(), 10) > 30)
    {
      this.actual = 30;
    }
    else {
      this.loading = true;
      this.actual = parseInt(this.actual.toString(), 10) + 1;
      this.getResultados(this.equipo, this.actual);
      this.getClasificacion(this.equipo, this.actual);
    }
  }

  downJornada() {
    if (parseInt(this.actual.toString(), 10) <= 1)
    {
      this.actual = 1;
    }
    else {
      this.loading = true;
      this.actual = parseInt(this.actual.toString(), 10) - 1;
      this.getResultados(this.equipo, this.actual);
      this.getClasificacion(this.equipo, this.actual);
    }
  }

}



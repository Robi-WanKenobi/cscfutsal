import {Component, Input, OnInit} from '@angular/core';
import { EquipoService} from "../../Services/equipo.service";
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() infantil: boolean;
  equipo: string;
  clasificacion: any;
  jornada: any;
  actual: {};
  loading: boolean;
  cronica: boolean = false;

  constructor(private equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.cronica = false;
    this.loading = true;
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      if (this.equipo === 'Infantil A')
      {
        this.infantil = true;
      }else {
        this.infantil = false;
      }

      this.setJornadaActual(this.equipo);
      this.getCronicaPartido();
    });
  }

  getCronicaPartido() {
    this.equipoService.getCronicaPartido(this.equipo, this.actual).then((res) => {
      console.log(res);
      if (res) {
        this.cronica = true;
      }else this.cronica = false;
    }, (err) => {
      console.log(err);
    });
  }

  setJornadaActual(equipo) {
    this.equipoService.getJornadaActual().then((res) => {
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
      this.getCronicaPartido();
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
      this.getCronicaPartido();
    }
  }
}



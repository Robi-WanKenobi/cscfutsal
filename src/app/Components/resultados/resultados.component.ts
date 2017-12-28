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
  true_actual: {};
  cronica: {};
  loading: boolean;
  is_cronica: boolean = false;
  in_jornada_actual: boolean = true;
  local: string;
  visitante: string;
  resultado: string;
  goleadores: any;
  asistentes: any;
  amarillas: any;
  rojas: any;
  texto: string;

  constructor(private equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.is_cronica = false;
    this.in_jornada_actual = true;
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
    });
  }

  getCronicaPartido(equipo, jornada) {
    this.equipoService.getCronicaPartido(equipo, jornada).then((res) => {
      if (res.toString() === '') {
        this.is_cronica = false;
      } else {
        this.is_cronica = true;
        this.cronica = res;
        console.log(this.cronica);
        this.local = this.cronica[0]['local'];
        this.visitante = this.cronica[0]['visitante'];
        this.resultado = this.cronica[0]['resultado'];
        this.goleadores = this.cronica[0]['goleadores'];
        this.asistentes = this.cronica[0]['asistentes'];
        this.amarillas = this.cronica[0]['amarillas'];
        this.rojas = this.cronica[0]['rojas'];
        this.texto = this.cronica[0]['texto'];
      }
    }, (err) => {
      console.log(err);
    });
  }

  setJornadaActual(equipo) {
    this.equipoService.getJornadaActual().then((res) => {
      this.true_actual = res;
      this.actual = res;
      this.getResultados(equipo, res);
      this.getClasificacion(equipo, res);
      this.getCronicaPartido(equipo, res);
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
      this.getCronicaPartido(this.equipo, this.actual);
      if (parseInt(this.actual.toString(), 10) === parseInt(this.true_actual.toString(), 10))
      {
        this.in_jornada_actual = true;
      }else {
        this.in_jornada_actual = false;
      }
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
      this.getCronicaPartido(this.equipo, this.actual);
      if (parseInt(this.actual.toString(), 10) === parseInt(this.true_actual.toString(), 10))
      {
        this.in_jornada_actual = true;
      }else {
        this.in_jornada_actual = false;
      }
    }
  }
}



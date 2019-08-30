import {Component, Input, OnInit} from '@angular/core';
import { EquipoService} from "../../services/equipo.service";
import { Params, ActivatedRoute } from '@angular/router';
import {CronicaService} from '../../services/cronica.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() equipo: string;
  clasificacion: any;
  jornada: any;
  actual: {};
  true_actual: {};
  cronica: {};
  cronicaId: string;
  loading: boolean;
  is_cronica = false;
  in_jornada_actual = true;
  local: string;
  visitante: string;
  resultado: string;
  goleadores: any;
  asistentes: any;
  amarillas: any;
  rojas: any;
  texto: string;

  constructor(private equipoService: EquipoService,
              private cronicaService: CronicaService) { 
  }

  ngOnInit() {
    this.is_cronica = false;
    this.in_jornada_actual = true;
    this.loading = true;
  }

  ngOnChanges(){
    if (this.equipo) {
      this.setJornadaActual(this.equipo);
    }
  }

  setJornadaActual(equipo) {
    this.equipoService.getJornadaActual(equipo).then((res) => {
      this.true_actual = res;
      this.actual = res;
      this.true_actual = parseInt(this.actual.toString(), 10);
      this.actual = parseInt(this.actual.toString(), 10);
      this.getResultados(equipo, this.actual);
      this.getClasificacion(equipo, this.actual);
      this.getCronicaPartido(equipo, this.actual);
    }, (err) => {
      console.log(err);
    });
  }

  getCronicaPartido(equipo, jornada) {
    this.equipoService.getCronica(equipo, jornada).then((res) => {
      if (res['cronicas'].length > 0) {
        this.is_cronica = true;
        this.cronica = res['cronicas'][0];
        this.cronicaId = this.cronica['_id'];
        this.local = this.cronica['local'];
        this.visitante = this.cronica['visitante'];
        this.resultado = this.cronica['resultado'];
        this.texto = this.cronica['texto'];
        this.cronicaService.getCronica(this.cronicaId).then((result) => {
          this.goleadores = result['goleadores'];
          this.asistentes = result['asistentes'];
          this.amarillas = result['amarillas'];
          this.rojas = result['rojas'];
        }, (err) => {
          console.log(err);
        })
      }
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
    if (parseInt(this.actual.toString(), 10) > 30) {
      this.actual = 30;
    } else {
      this.loading = true;
      this.is_cronica = false;
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
    if (parseInt(this.actual.toString(), 10) <= 1) {
      this.actual = 1;
    } else {
      this.loading = true;
      this.is_cronica = false;
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



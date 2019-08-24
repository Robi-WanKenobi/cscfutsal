import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {CronicaService} from '../../../Services/cronica.service';
import { EquipoService } from '../../../Services/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-edit-cronica',
  templateUrl: './admin-edit-cronica.component.html',
  styleUrls: ['./admin-edit-cronica.component.css']
})
export class AdminEditCronicaComponent implements OnInit {

  jugadores: any;
  goleadores: any;
  asistentes: any;
  amarillas: any;
  jornada: number;
  rojas: any;
  equipo: string;
  texto: string;
  local:string;
  visitante:string;
  resultado:string;
  minuto: number;

  id: any;

  constructor(private cronicaService: CronicaService,
              private equipoService: EquipoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['equipo'];
    });
    this.getCronica(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
  }

  getJugadores(){
    this.equipoService.getJugadores(this.equipo).then((res) => {
      this.jugadores = res['jugadores'];
    }, (err) => {
      console.log(err);
    });
  }

  getCronica(id) {
    this.cronicaService.getCronica(id).then((res) => {
      this.jornada = res['jornada'];
      this.goleadores = res['goleadores'];
      this.asistentes = res['asistentes'];
      this.amarillas = res['amarillas'];
      this.rojas = res['rojas'];
      this.getJugadores();

      this.local = res['local'];
      this.resultado = res['resultado'];
      this.visitante = res['visitante'];
      this.texto = res['texto'];
    }, (err) => {
      console.log(err);
    });
  }

  submitCronica() {
    this.cronicaService.updateCronica(this.id, {'texto': this.texto, 'resultado': this.resultado}).then((res) => {
      Swal.fire({
        type: 'success',
        title: 'Actualitzada',
        text: 'La crònica s\'ha actualitzat correctament'
      })
    }, (err) => {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'S\'ha produït un error en actualitzar la crònica'
      })
    });
  }

  toGoleadores(id) {
    this.cronicaService.addToGols(this.id,{ 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromGoleadores(id) {
    this.cronicaService.delFromGols(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toAsistentes(id) {
    this.cronicaService.addToAsis(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromAsistentes(id) {
    this.cronicaService.delFromAsis(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toAmarillas(id) {
    this.cronicaService.addToAmarillas(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromAmarillas(id) {
    this.cronicaService.delFromAmarillas(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toRojas(id) {
    this.cronicaService.addToRojas(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromRojas(id) {
    this.cronicaService.delFromRojas(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }
}

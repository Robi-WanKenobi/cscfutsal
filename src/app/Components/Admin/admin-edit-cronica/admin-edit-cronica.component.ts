import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../Services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

declare var swal: any;

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

  constructor(private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCronica(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
  }

  getCronica(id) {
    this.adminService.getCronica(id).then((res) => {
      console.log(res);
     this.equipo = res['equipo'];
     this.jornada = res['jornada'];
     this.goleadores = res['goleadores'];
     console.log(this.goleadores);
     this.asistentes = res['asistentes'];
     this.amarillas = res['amarillas'];
     this.rojas = res['rojas'];
     this.getJugadores(this.equipo);

     this.local = res['local'];
     this.resultado = res['resultado'];
     this.visitante = res['visitante'];
     this.texto = res['texto'];

    }, (err) => {
      console.log(err);
    });
  }

  submitCronica() {
    this.adminService.updateCronica(this.id, {'texto': this.texto}).then((res) => {
      swal(
        'Actualitzada',
        'La crònica s\'ha actualitzat correctament',
        'success'
      );
    }, (err) => {
      swal(
        'Error',
        'S\'ha produït un error en actualitzar la crònica',
        'error'
      );
    });
  }

  getJugadores(equipo) {
    this.adminService.getJugadores(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  toGoleadores(id) {
    this.adminService.addToGols(this.id,{ 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromGoleadores(id) {
    this.adminService.delFromGols(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toAsistentes(id) {
    this.adminService.addToAsis(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromAsistentes(id) {
    this.adminService.delFromAsis(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toAmarillas(id) {
    this.adminService.addToAmarillas(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromAmarillas(id) {
    this.adminService.delFromAmarillas(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  toRojas(id) {
    this.adminService.addToRojas(this.id, { 'jugador': id, 'minuto':this.minuto }).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }

  delFromRojas(id) {
    this.adminService.delFromRojas(this.id, id).then((res) => {
      this.getCronica(this.id);
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {PartidosService} from "../../../Services/partidos.service";
import {EquipoService} from "../../../Services/equipo.service";
import {AdminService} from "../../../Services/admin.service";
import {Router} from "@angular/router";

declare var swal: any;

@Component({
  selector: 'app-admin-add-cronica',
  templateUrl: './admin-add-cronica.component.html',
  styleUrls: ['./admin-add-cronica.component.css']
})
export class AdminAddCronicaComponent implements OnInit {

  cronica: {};
  jugadores: any;
  jornada: number;
  equipo: string;
  visitante: string;
  local: string;
  resultado: string;
  cronica_id: any;
  goleadores: any[];
  loading: boolean;

  status: string;

  constructor(private partidosService: PartidosService,
              private equipoService: EquipoService,
              private adminService: AdminService,
              private router: Router
  ) { }

  ngOnInit() {
    this.loading = false;
  }

  saveCronica() {
    this.adminService.saveCronica(
      {'equipo': this.equipo, 'jornada':this.jornada,
        'local': this.local, 'visitante': this.visitante, 'resultado': this.resultado
      }).then((res) => {
      swal(
        'Creada',
        'La crònica s\'ha afegit correctament',
        'success'
      );
      let id = res['_id'];
      setTimeout(() => {this.router.navigate(['/edit-cronica', id]); }, 1000);
    }, (err) => {
      console.log(err);
      swal(
        'Error',
        'S\'ha produït un error en afegir la crònica',
        'error'
      );
    });
  }

  getPartido() {
    if (this.equipo === 'Sènior A') {
      this.loading = true;
      this.getSeniorAPartido(this.jornada);
    }
    if (this.equipo === 'Sènior B') {
      this.loading = true;
      this.getSeniorBPartido(this.jornada);
    }
    if (this.equipo === 'Juvenil A') {
      this.loading = true;
      this.getJuvenilAPartido(this.jornada);
    }
    if (this.equipo === 'Juvenil B') {
      this.loading = true;
      this.getJuvenilBPartido(this.jornada);
    }
    if (this.equipo === 'Cadete A') {
      this.loading = true;
      this.getCadeteAPartido(this.jornada);
    }
  }

  getSeniorAPartido(jornada) {
    this.partidosService.getPartidoSeniorA(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }

  getCadeteAPartido(jornada) {
    this.partidosService.getPartidoCadeteA(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }
}

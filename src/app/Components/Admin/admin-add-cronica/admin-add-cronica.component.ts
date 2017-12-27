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
    this.loading = true;
    if (this.equipo === 'Sènior A') {
      this.getSeniorAPartido(this.jornada);
    }
    if (this.equipo === 'Sènior B') {
      this.getSeniorBPartido(this.jornada);
    }
    if (this.equipo === 'Sènior C') {
      this.getSeniorCPartido(this.jornada);
    }
    if (this.equipo === 'Juvenil A') {
      this.getJuvenilAPartido(this.jornada);
    }
    if (this.equipo === 'Juvenil B') {
      this.getJuvenilBPartido(this.jornada);
    }
    if (this.equipo === 'Juvenil C') {
      this.getJuvenilCPartido(this.jornada);
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
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {PartidosService} from "../../../Services/partidos.service";
import {EquipoService} from "../../../Services/equipo.service";
import {AdminService} from "../../../Services/admin.service";

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
  partido: {
    visitante: string,
    local: string,
    resultado: string
  };
  cronica_id: any;
  goleadores: any[];

  status: string;

  constructor(private partidosService: PartidosService, private equipoService: EquipoService, private adminService: AdminService) { }

  ngOnInit() {
  }

  saveCronica() {
    this.adminService.saveCronica(
      {'equipo': this.equipo, 'jornada':this.jornada,
        'local': this.partido['local'], 'visitante': this.partido['visitante'], 'resultado': this.partido['resultado']
      }).then((res) => {
      this.status = 'creada';
      this.cronica_id = res['_id'];
      this.getCronicaTo();
    }, (err) => {
      console.log(err);
    });
  }

  getJugadores(equipo) {
    this.equipoService.getJugadores(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  getPartido() {
    this.getJugadores(this.equipo);
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

  getCronicaTo() {
    this.partidosService.getCronicaToComplete(this.cronica_id).then((res) => {
      this.cronica = res;
      this.goleadores = this.cronica['goleadores'];
      console.log(this.goleadores);
    }, (err) => {
      console.log(err);
    });
  }

  toGoles(idjugador) {
    this.adminService.addToGols(this.cronica_id, idjugador).then((res) => {
      this.getCronicaTo();
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorAPartido(jornada) {
    this.partidosService.getPartidoSeniorA(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }

  getJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.partido.visitante = res['visitante'];
      this.partido.local = res['local'];
      this.partido.resultado = res['resultado'];
    }, (err) => {
      console.log(err);
    });
  }
}

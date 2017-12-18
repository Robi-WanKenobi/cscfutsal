import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../../Services/admin.service";
import {EquipoService} from "../../../Services/equipo.service";
import {JugadorService} from "../../../Services/jugador.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-admin-plantilla',
  templateUrl: './admin-plantilla.component.html',
  styleUrls: ['./admin-plantilla.component.css']
})
export class AdminPlantillaComponent implements OnInit {

  jugadores: any;
  seniorA: any;
  seniorB: any;
  seniorC: any;
  juvenilA: any;
  juvenilB: any;
  juvenilC: any;
  infantilA: any;
  status: string;

  constructor(private adminService: AdminService, private equipoService: EquipoService, private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.getAllJugadores();
      this.getJugadoresSeniorA();
      this.getJugadoresSeniorB();
      this.getJugadoresSeniorC();
      this.getJugadoresJuvenilA();
      this.getJugadoresJuvenilB();
      this.getJugadoresJuvenilC();
      this.getJugadoresInfantilA(); }, 2000);

  }

  getAllJugadores() {
    /*La petición requiere permisos*/
    this.adminService.getAllJugadores().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  getJugadoresSeniorA() {
    this.equipoService.getJugadores('Sènior A').then((res) => {
      this.seniorA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresSeniorB() {
    this.equipoService.getJugadores('Sènior B').then((res) => {
      this.seniorB = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresSeniorC() {
    this.equipoService.getJugadores('Sènior C').then((res) => {
      this.seniorC = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresJuvenilA() {
    this.equipoService.getJugadores('Juvenil A').then((res) => {
      this.juvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresJuvenilB() {
    this.equipoService.getJugadores('Juvenil B').then((res) => {
      this.juvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresJuvenilC() {
    this.equipoService.getJugadores('Juvenil C').then((res) => {
      this.juvenilC = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresInfantilA() {
    this.equipoService.getJugadores('Infantil A').then((res) => {
      this.infantilA = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteJugador(id) {
    this.status = 'borrado';
    this.adminService.deleteJugador(id).then((result) => {
      setTimeout(() => {this.status = ''; }, 1000);
      setTimeout(() => {this.ngOnInit(); }, 1000);
    }, (err) => {
      console.log(err);
    });
  }
}

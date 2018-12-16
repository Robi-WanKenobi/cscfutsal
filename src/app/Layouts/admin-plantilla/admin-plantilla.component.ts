import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../Services/admin.service";
import {EquipoService} from "../../Services/equipo.service";
import {Router} from "@angular/router";
declare var swal: any;

@Component({
  selector: 'app-admin-plantilla',
  templateUrl: './admin-plantilla.component.html',
  styleUrls: ['./admin-plantilla.component.css']
})
export class AdminPlantillaComponent implements OnInit {

  seniorA: any;
  seniorB: any;
  juvenilA: any;
  juvenilB: any;
  cadeteA: any;
  status: string;

  constructor(private adminService: AdminService, private equipoService: EquipoService, private router: Router) { }

  ngOnInit() {
      this.getJugadoresSeniorA();
      this.getJugadoresSeniorB();
      this.getJugadoresJuvenilA();
      this.getJugadoresJuvenilB();
      this.getJugadoresCadeteA();
  }

  getJugadoresSeniorA() {
    this.adminService.getJugadores('Sènior A').then((res) => {
      this.seniorA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresSeniorB() {
    this.adminService.getJugadores('Sènior B').then((res) => {
      this.seniorB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getJugadoresJuvenilA() {
    this.adminService.getJugadores('Juvenil A').then((res) => {
      this.juvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresJuvenilB() {
    this.adminService.getJugadores('Juvenil B').then((res) => {
      this.juvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresCadeteA() {
    this.adminService.getJugadores('Cadet A').then((res) => {
      this.cadeteA = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteJugador(id) {
    swal(
      'Eliminat',
      'El jugador s\'ha esborrat correctament',
      'success'
    );
    this.adminService.deleteJugador(id).then((result) => {
      setTimeout(() => {this.ngOnInit(); }, 1000);
    }, (err) => {
      console.log(err);
      swal(
        'Error',
        'S\'ha produït un error en eliminar al jugador',
        'error'
      );
    });
  }
}

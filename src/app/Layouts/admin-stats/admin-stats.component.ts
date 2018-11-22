import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../Services/admin.service";
import {EquipoService} from "../../Services/equipo.service";
import {Router} from "@angular/router";
declare var swal: any;

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {

  seniorA: any;
  seniorB: any;
  juvenilA: any;
  juvenilB: any;
  cadeteA: any;
  status: string;

  loading: boolean;

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
    this.adminService.getJugadores('Cadete A').then((res) => {
      this.cadeteA = res;
    }, (err) => {
      console.log(err);
    });
  }

  popSave() {
    swal(
      'Actualitzat',
      'Les estadístiques s\'han actualitzat correctament',
      'success'
    );
  }

  updateJugador(j) {
    this.loading = true;
    console.log(j);

    this.adminService.updateJugador(j._id, j).then((res) => {
      this.status = 'success';
      setTimeout(() => {this.status = ''; }, 1000);
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.status = 'error';
      setTimeout(() => {this.status = ''; }, 1000);
    });
  }
}

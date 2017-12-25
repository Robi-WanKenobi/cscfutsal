import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../Services/admin.service";
import {EquipoService} from "../../Services/equipo.service";
import {JugadorService} from "../../Services/jugador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-cronicas',
  templateUrl: './admin-cronicas.component.html',
  styleUrls: ['./admin-cronicas.component.css']
})
export class AdminCronicasComponent implements OnInit {

  seniorA: any;
  seniorB: any;
  seniorC: any;
  juvenilA: any;
  juvenilB: any;
  juvenilC: any;
  infantilA: any;
  status: string;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getCronicasSeniorA();
  }

  getCronicasSeniorA() {
    this.adminService.getCronicas('Sènior A').then((res) => {
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
  getJugadoresSeniorC() {
    this.adminService.getJugadores('Sènior C').then((res) => {
      this.seniorC = res;
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
  getJugadoresJuvenilC() {
    this.adminService.getJugadores('Juvenil C').then((res) => {
      this.juvenilC = res;
    }, (err) => {
      console.log(err);
    });
  }
  getJugadoresInfantilA() {
    this.adminService.getJugadores('Infantil A').then((res) => {
      this.infantilA = res;
    }, (err) => {
      console.log(err);
    });
  }


}

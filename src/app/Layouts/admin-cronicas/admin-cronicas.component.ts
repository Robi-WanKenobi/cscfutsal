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
    this.getCronicasSeniorB();
    this.getCronicasSeniorC();
    this.getCronicasJuvenilA();
    this.getCronicasJuvenilB();
    this.getCronicasJuvenilC();
    this.getCronicasInfantilA();
  }

  getCronicasSeniorA() {
    this.adminService.getCronicas('Sènior A').then((res) => {
      this.seniorA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasSeniorB() {
    this.adminService.getCronicas('Sènior B').then((res) => {
      this.seniorB = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasSeniorC() {
    this.adminService.getCronicas('Sènior C').then((res) => {
      this.seniorC = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasJuvenilA() {
    this.adminService.getCronicas('Juvenil A').then((res) => {
      this.juvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasJuvenilB() {
    this.adminService.getCronicas('Juvenil B').then((res) => {
      this.juvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasJuvenilC() {
    this.adminService.getCronicas('Juvenil C').then((res) => {
      this.juvenilC = res;
    }, (err) => {
      console.log(err);
    });
  }
  getCronicasInfantilA() {
    this.adminService.getCronicas('Infantil A').then((res) => {
      this.infantilA = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteCronica(id) {
    this.status = 'borrado';
    this.adminService.deleteCronica(id).then((result) => {
      setTimeout(() => {this.status = ''; }, 1000);
      setTimeout(() => {this.ngOnInit(); }, 1000);
    }, (err) => {
      console.log(err);
    });
  }

}

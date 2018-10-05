import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../Services/admin.service";
import {EquipoService} from "../../Services/equipo.service";
import {JugadorService} from "../../Services/jugador.service";
import {Router} from "@angular/router";

declare var swal: any;

@Component({
  selector: 'app-admin-cronicas',
  templateUrl: './admin-cronicas.component.html',
  styleUrls: ['./admin-cronicas.component.css']
})
export class AdminCronicasComponent implements OnInit {

  seniorA: any;
  seniorB: any;
  juvenilA: any;
  juvenilB: any;
  cadeteA: any;
  status: string;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getCronicasSeniorA();
    this.getCronicasSeniorB();
    this.getCronicasJuvenilA();
    this.getCronicasJuvenilB();
    this.getCronicasCadeteA();
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
  getCronicasCadeteA() {
    this.adminService.getCronicas('Cadete A').then((res) => {
      this.cadeteA = res;
    }, (err) => {
      console.log(err);
    });
  }


  deleteCronica(id) {
    this.adminService.deleteCronica(id).then((result) => {
      swal(
        'Eliminada',
        'La crònica s\'ha esborrat correctament',
        'success'
      );
      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
    }, (err) => {
      console.log(err);
      swal(
        'Error',
        'S\'ha produït un error en eliminar la crònica',
        'error'
      );
    });

  }
}

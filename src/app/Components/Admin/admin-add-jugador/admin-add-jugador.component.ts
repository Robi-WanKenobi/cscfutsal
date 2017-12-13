import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service';
import {Jugador} from '../../../Models/jugador';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-add-jugador',
  templateUrl: './admin-add-jugador.component.html',
  styleUrls: ['./admin-add-jugador.component.css']
})
export class AdminAddJugadorComponent implements OnInit {

  jugador = new Jugador();

  equipos: string[] = ['Sènior A', 'Sènior B', 'Sènior C',
    'Juvenil A', 'Juvenil B', 'Juvenil C',
    'Infantil A'];

  status: string;

  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit() {
  }

  submitJugador() {
    this.adminService.saveJugador(this.jugador).then((res) => {
      this.status = 'success';
      setTimeout(() => {window.location.reload(); }, 1500);
    }, (err) => {
      console.log(err);
      this.status = 'error';
    });
  }
}

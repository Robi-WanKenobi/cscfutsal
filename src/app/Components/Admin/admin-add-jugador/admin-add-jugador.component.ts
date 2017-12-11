import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service';
import {Jugador} from '../../../Models/jugador';

@Component({
  selector: 'app-admin-add-jugador',
  templateUrl: './admin-add-jugador.component.html',
  styleUrls: ['./admin-add-jugador.component.css']
})
export class AdminAddJugadorComponent implements OnInit {

  jugador = new Jugador('', '', '', null, '', '', '');

  equipos = ['Sènior A', 'Sènior B', 'Sènior C',
    'Juvenil A', 'Juvenil B', 'Juvenil C',
    'Infantil A'];

  constructor(private adminService: AdminService) { }


  ngOnInit() {
  }

  submitJugador() {
    console.log(this.jugador);
  }
}

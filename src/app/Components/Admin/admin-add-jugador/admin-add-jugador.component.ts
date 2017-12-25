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

  status: string;

  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit() {
  }

  submitJugador() {
    this.adminService.saveJugador(this.jugador).then((res) => {
      this.status = 'success';
      let id = res['_id'];
      setTimeout(() => {this.router.navigate(['/edit', id]); }, 1500);
    }, (err) => {
      console.log(err);
      this.status = 'error';
    });
  }
}

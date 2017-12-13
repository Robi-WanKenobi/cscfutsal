import { Component, OnInit } from '@angular/core';
import {Jugador} from "../../../Models/jugador";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../Services/admin.service";

@Component({
  selector: 'app-admin-edit-jugador',
  templateUrl: './admin-edit-jugador.component.html',
  styleUrls: ['./admin-edit-jugador.component.css']
})
export class AdminEditJugadorComponent implements OnInit {

  jugador: any;

  status: string;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJugador(this.route.snapshot.params['id']);
  }

  getJugador(id) {
    this.adminService.getJugador(id).then((res) => {
      this.jugador = res;
      console.log(this.jugador);
    }, (err) => {
      console.log(err);
    });
  }

  updateJugador(id) {
    this.adminService.updateJugador(id, this.jugador).then((res) => {
      console.log(this.jugador);
      this.status = 'success';
      setTimeout(() => {this.router.navigate(['/admin']); }, 1500);
    }, (err) => {
      console.log(err);
      this.status = 'error';
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service';
import {Jugador} from '../../../Models/jugador';
import {Router} from "@angular/router";

declare var swal: any;

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
      swal(
        'Afegit',
        'El jugador s\'ha creat correctament',
        'success'
      );
      let id = res['_id'];
      setTimeout(() => {this.router.navigate(['/edit', id]); }, 1000);
    }, (err) => {
      console.log(err);
      swal(
        'Error',
        'S\'ha produït un error en afegit al jugador',
        'error'
      );
    });
  }
}

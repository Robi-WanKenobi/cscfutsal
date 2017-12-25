import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../Services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-edit-cronica',
  templateUrl: './admin-edit-cronica.component.html',
  styleUrls: ['./admin-edit-cronica.component.css']
})
export class AdminEditCronicaComponent implements OnInit {

  jugadores: any;
  equipo: string;

  constructor(private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCronica(this.route.snapshot.params['id']);
  }

  getCronica(id) {
    this.adminService.getCronica(id).then((res) => {
     this.equipo = res['equipo'];
     this.getJugadores(this.equipo);
    }, (err) => {
      console.log(err);
    });
  }

  getJugadores(equipo) {
    this.adminService.getJugadores(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

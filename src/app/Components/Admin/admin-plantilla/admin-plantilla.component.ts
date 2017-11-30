import { Component, OnInit } from '@angular/core';
import { AdminService} from "../../../Services/admin.service";

@Component({
  selector: 'app-admin-plantilla',
  templateUrl: './admin-plantilla.component.html',
  styleUrls: ['./admin-plantilla.component.css']
})
export class AdminPlantillaComponent implements OnInit {

  jugadores: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAllJugadores();
  }

  getAllJugadores() {
    this.adminService.getAllJugadores().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

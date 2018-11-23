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
  imagen: FormData;
  status: string;
  image_status: string;
  datos_status: string;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJugador(this.route.snapshot.params['id']);
  }

  getJugador(id) {
    this.adminService.getJugador(id).then((res) => {
      this.jugador = res;
    }, (err) => {
      console.log(err);
    });
  }

  updateDatosJugador(id) {
    this.adminService.updateJugador(id, this.jugador).then((res) => {
      this.datos_status = 'success';
      setTimeout(() => {this.datos_status = ''; }, 1000);
    }, (err) => {
      console.log(err);
      this.datos_status = 'error';
      setTimeout(() => {this.datos_status = ''; }, 1000);
    });
  }

  uploadImage(id) {
    this.adminService.uploadImage(id, this.imagen).then((res) => {
      this.image_status = 'success';
      setTimeout(() => {this.image_status = ''; }, 1000);
      setTimeout(() => {this.getJugador(id); }, 500);
    }, (err) => {
      console.log(err);
      this.image_status = 'error';
      setTimeout(() => {this.image_status = ''; }, 1000);
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('image', file, file.name);
      this.imagen = formData;
    }else {
    }
  }
}

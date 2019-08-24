import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from '../../../Services/jugador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-edit-jugador',
  templateUrl: './admin-edit-jugador.component.html',
  styleUrls: ['./admin-edit-jugador.component.css']
})
export class AdminEditJugadorComponent implements OnInit {

  jugador: any;
  imagen: FormData;

  constructor(private jugadorService: JugadorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJugador(this.route.snapshot.params['id']);
  }

  getJugador(id) {
    this.jugadorService.getJugador(id).then((res) => {
      this.jugador = res;
    }, (err) => {
      console.log(err);
    });
  }

  updateDatosJugador(id) {
    this.jugadorService.updateJugador(id, this.jugador).then((res) => {
      Swal.fire({
        type: 'success',
        title: 'Actualitzat',
        text: 'El jugador s\'ha actualitzat correctament'
      })  
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'S\'ha produït un error en actualitzar al jugador'
      })  
    });
  }

  uploadImage(id) {
    this.jugadorService.uploadImage(id, this.imagen).then((res) => {
      Swal.fire({
        type: 'success',
        title: 'Actualitzat',
        text: 'La imatge s\'ha actualitzat correctament'
      })
      setTimeout(() => {this.getJugador(id); }, 500);
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'S\'ha produït un error en afegit la imatge'
      })  
    });
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('image', file, file.name);
      this.imagen = formData;
    }else {
    }
  }
}

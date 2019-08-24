import { Component, OnInit } from '@angular/core';
import {CronicaService} from '../../Services/cronica.service';
import { EquipoService } from '../../Services/equipo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cronicas',
  templateUrl: './admin-cronicas.component.html',
  styleUrls: ['./admin-cronicas.component.css']
})
export class AdminCronicasComponent implements OnInit {

  equipos: {};

  constructor(private equipoService: EquipoService,
              private cronicaService: CronicaService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getCronicas();
  }

  getCronicas() {
    this.equipoService.getCronicas().then((res) => {
      this.equipos = res;
    }, (err) => {
      console.log(err);
    });
  }

  editCronica(idcronica, idequipo) {
    this.router.navigate(['/admin/edit-cronica', idcronica],{queryParams: {equipo: idequipo}});
  }

  addCronica(idequipo) {
    this.router.navigate(['/admin/add-cronica'],{queryParams: {equipo: idequipo}});
  }

  deleteCronica(idcronica, idequipo) {
    Swal.fire({
      title: 'Estàs segur?',
      text: "La crònica serà el·liminada permanentment",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancel·lar'
    }).then((result) => {
      if (result.value) {
        this.cronicaService.deleteCronica(idcronica, idequipo).then((res) => {
            Swal.fire(
              'Eliminat!',
              'La crònica s\'ha el·liminat correctament',
              'success'
            )
            this.getCronicas();
        }, (err) => {
          console.log(err);
          Swal.fire(
            'Error',
            'S\'ha produït un error en el·liminar la crònica',
            'error'
          )
        });
      } 
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../../Services/equipo.service';
import {CronicaService} from '../../../Services/cronica.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-cronica',
  templateUrl: './admin-add-cronica.component.html',
  styleUrls: ['./admin-add-cronica.component.css']
})
export class AdminAddCronicaComponent implements OnInit {

  cronica: {};
  jugadores: any;
  jornada: number;
  equipo: string;
  visitante: string;
  local: string;
  resultado: string;
  cronica_id: any;
  goleadores: any[];
  loading: boolean;

  status: string;

  constructor(private equipoService: EquipoService,
              private cronicaService: CronicaService,
              private router: Router,
              private route:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['equipo'];
    });
    this.loading = false;
  }

  getPartido() {
    this.loading = true;
    this.equipoService.getPartido(this.equipo, this.jornada).then((res) => {
      this.visitante = res['visitante'];
      this.local = res['local'];
      this.resultado = res['resultado'];
      this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }

  saveCronica() {
    this.cronicaService.saveCronica({
      'jornada': this.jornada,
      'local': this.local, 
      'visitante': this.visitante, 
      'resultado': this.resultado
      }).then((res) => {
        const id = res['_id'];
        this.equipoService.addCronicaToEquipo(this.equipo, id).then((res) => {
        Swal.fire({
          type: 'success',
          title: 'Afegit',
          text: 'La crónica s\'ha creat correctament'
        })      
        setTimeout(() => {this.router.navigate(['/admin/edit-cronica', id],{queryParams: {equipo: this.equipo}}); }, 1000);
        },
        (err) => {
          console.log(err);
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'S\'ha produït un error en afegit la crònica a l\'equip'
          })  
        });
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'S\'ha produït un error en afegit la crònica a la base de dades'
      })
    });
  }
}

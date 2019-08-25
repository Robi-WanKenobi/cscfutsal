import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../../services/equipo.service';

@Component({
  selector: 'app-admin-add-equipo',
  templateUrl: './admin-add-equipo.component.html',
  styleUrls: ['./admin-add-equipo.component.css']
})
export class AdminAddEquipoComponent implements OnInit {

  equipo = {};
  id;
  isUpdate: boolean = false;

  constructor(private equipoService: EquipoService,
              private router: Router,
              private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getEquipo(this.id);
      this.isUpdate = true;
    }
  }

  getEquipo(id) {
    this.equipoService.getEquipo(this.id).then((res) => {
      this.equipo = res;
    }, (err) => {
      console.log(err);
    });
  }

  submitEquipo() {
    if (!this.isUpdate) {
      this.equipoService.saveEquipo(this.equipo).then((res) => {
        Swal.fire({
          type: 'success',
          title: 'Afegit',
          text: 'L\'equip s\'ha creat correctament'
        })      
        setTimeout(() => {this.router.navigate(['/admin/admin-equips']); }, 1000);
      }, (err) => {
        console.log(err);
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'S\'ha produït un error en afegit l\'equip a la base de dade'
        })
      });
    }
    else {
      this.equipoService.updateEquipo(this.id, this.equipo).then((res) => {
        Swal.fire({
          type: 'success',
          title: 'Actualitzat',
          text: 'L\'equip s\'ha actualitzat correctament'
        })      
        setTimeout(() => {this.router.navigate(['/admin/admin-equips']); }, 1000);
      }, (err) => {
        console.log(err);
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'S\'ha produït un error en actualitzar l\'equip a la base de dade'
        })
      });
    }
  }

  deleteEquipo(id) {
    this.equipoService.getEquipo(this.id).then((res) => {
      if (res['jugadores'].length === 0) {
        Swal.fire({
          title: 'Estàs segur?',
          text: "L'equip serà el·liminat permanentment",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancel·lar'
        }).then((result) => {
          if (result.value) {
            this.equipoService.deleteEquipo(id).then((res) => {
                Swal.fire(
                  'Eliminat!',
                  'L\'equip s\'ha el·liminat correctament',
                  'success'
                )
                setTimeout(() => {this.router.navigate(['/admin/admin-equips']); }, 1000);
            }, (err) => {
              console.log(err);
              Swal.fire(
                'Error',
                'S\'ha produït un error en el·liminar l\'equip',
                'error'
              )
            });
          } 
        })    
      }
      else {
        Swal.fire(
          'Atenció',
          'L\'equip te jugadors relacionats, relacionals amb altre equip abans d\esborrar aquest.',
          'warning'
        )
      }
    }, (err) => {
      console.log(err);
    });
    
  }
}

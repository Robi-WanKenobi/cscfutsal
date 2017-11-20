import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { EquipoService} from "../../Services/equipo.service";

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  equipo: string;
  clasificacion: any;

  constructor(public equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      console.log(this.equipo);
      this.getClasificacion();
    });
  }

  getClasificacion() {
    this.equipoService.getClasificacion().then((res) => {
      this.clasificacion = res;
    }, (err) => {
      console.log(err);
    });
  }

}

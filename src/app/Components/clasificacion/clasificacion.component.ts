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
  actual: {};
  loading: boolean;

  constructor(public equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      console.log(this.equipo);
      this.setJornadaActual(this.equipo);
    });
  }

  setJornadaActual(equipo) {
    this.equipoService.getJornadaActual().then((res) => {
      console.log(res);
      this.actual = res;
      this.getClasificacion(equipo, res);
    }, (err) => {
      console.log(err);
    });
  }

  getClasificacion(equipo, jornada) {
    this.equipoService.getClasificacion(equipo, jornada).then((res) => {
      this.loading = false;
      this.clasificacion = res;
    }, (err) => {
      console.log(err);
    });
  }

  upJornada() {
    if (parseInt(this.actual.toString(), 10) > 30)
    {
      this.actual = 30;
    }
    else {
      this.loading = true;
      this.actual = parseInt(this.actual.toString(), 10) + 1;
      this.getClasificacion(this.equipo, this.actual);
    }
  }

  downJornada() {
    if (parseInt(this.actual.toString(), 10) <= 1)
    {
      this.actual = 1;
    }
    else {
      this.loading = true;
      this.actual = parseInt(this.actual.toString(), 10) - 1;
      this.getClasificacion(this.equipo, this.actual);
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-cronica',
  templateUrl: './cronica.component.html',
  styleUrls: ['./cronica.component.css']
})
export class CronicaComponent implements OnInit {

  equipo: string;
  jornada: {};
  constructor(private equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
    });
    this.getJornadaActual();
    console.log(this.equipo + this.jornada);
  }

  getJornadaActual() {
    this.equipoService.getJornadaActual().then((res) => {
      this.jornada = res;
    }, (err) => {
      console.log(err);
    });
  }
}

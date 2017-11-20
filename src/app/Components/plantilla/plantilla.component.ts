import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { EquipoService} from "../../Services/equipo.service";


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  equipo: string;
  jugadores: any;

  constructor(public equipoService: EquipoService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      console.log(this.equipo);
      this.getJugadores(this.equipo);
    });
  }

  getJugadores(equipo) {
    this.equipoService.getJugadores(this.equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-max-asis-equip',
  templateUrl: './max-asis-equip.component.html',
  styleUrls: ['./max-asis-equip.component.css']
})
export class MaxAsisEquipComponent implements OnInit {

  equipo: string;
  jugadores: any;

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      console.log(this.equipo);
      this.getMaxAsis(this.equipo);
    });
  }

  getMaxAsis(equipo) {
    this.equipoService.getMaxAsis(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

}

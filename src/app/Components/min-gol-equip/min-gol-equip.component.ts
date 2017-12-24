import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-min-gol-equip',
  templateUrl: './min-gol-equip.component.html',
  styleUrls: ['./min-gol-equip.component.css']
})
export class MinGolEquipComponent implements OnInit {

  equipo: string;
  jugadores: any;

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      this.getMinGol(this.equipo);
    });
  }

  getMinGol(equipo) {
    this.equipoService.getMinGol(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

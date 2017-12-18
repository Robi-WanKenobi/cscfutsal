import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-max-gols-equip',
  templateUrl: './max-gols-equip.component.html',
  styleUrls: ['./max-gols-equip.component.css']
})
export class MaxGolsEquipComponent implements OnInit {

  equipo: string;
  jugadores: any;

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      this.getMaxGols(this.equipo);
    });
  }

  getMaxGols(equipo) {
    this.equipoService.getMaxGols(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

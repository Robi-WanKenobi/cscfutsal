import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-max-amon-equip',
  templateUrl: './max-amon-equip.component.html',
  styleUrls: ['./max-amon-equip.component.css']
})
export class MaxAmonEquipComponent implements OnInit {


  equipo: string;
  jugadores: any;

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      this.getMaxAmon(this.equipo);
    });
  }

  getMaxAmon(equipo) {
    this.equipoService.getMaxAmon(equipo).then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

}

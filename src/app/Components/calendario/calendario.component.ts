import {Component, Input, OnInit} from '@angular/core';
import {EquipoService} from "../../Services/equipo.service";
import {Params, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  @Input() infantil: boolean;
  calendario: any;
  equipo: string;

  constructor(private equipoService: EquipoService,  private route:  ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.equipo = params['cat'];
      if (this.equipo === 'Infantil A')
      {
        this.infantil = true;
      }else {
        this.infantil = false;
        this.getCalendario(this.equipo);
      }
    });
  }

  getCalendario(equipo) {
    this.equipoService.getCalendario(equipo).then((res) => {
      this.calendario = res;
    }, (err) => {
      console.log(err);
    });
  }
}

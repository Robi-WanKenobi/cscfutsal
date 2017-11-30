import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../Services/jugador.service";

@Component({
  selector: 'app-max-amon-club',
  templateUrl: './max-amon-club.component.html',
  styleUrls: ['./max-amon-club.component.css']
})
export class MaxAmonClubComponent implements OnInit {

  jugadores: any;

  constructor(private jugadoresService: JugadorService) { }

  ngOnInit() {
    this.getMaxAmonClub();
  }

  getMaxAmonClub() {
    this.jugadoresService.getMaxAmonClub().then((res) => {
      this.jugadores = res;
      console.log(this.jugadores);
    }, (err) => {
      console.log(err);
    });
  }
}

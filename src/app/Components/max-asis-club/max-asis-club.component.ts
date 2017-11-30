import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../Services/jugador.service";
@Component({
  selector: 'app-max-asis-club',
  templateUrl: './max-asis-club.component.html',
  styleUrls: ['./max-asis-club.component.css']
})
export class MaxAsisClubComponent implements OnInit {

  jugadores: any;

  constructor(private jugadoresService: JugadorService) { }

  ngOnInit() {
    this.getMaxAsisClub();
  }

  getMaxAsisClub() {
    this.jugadoresService.getMaxAsisClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../Services/jugador.service";
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-max-gol-club',
  templateUrl: './max-gol-club.component.html',
  styleUrls: ['./max-gol-club.component.css']
})
export class MaxGolClubComponent implements OnInit {

  jugadores: any;

  constructor(private jugadoresService: JugadorService) { }

  ngOnInit() {
    this.getMaxGolesClub();
  }

  getMaxGolesClub() {
    this.jugadoresService.getMaxGolsClub().then((res) => {
      this.jugadores = res;
      console.log(this.jugadores);
      console.log(this.jugadores[0]);
    }, (err) => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../Services/jugador.service";

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
    }, (err) => {
      console.log(err);
    });
  }

}

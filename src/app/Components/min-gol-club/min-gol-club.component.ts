import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../Services/jugador.service";

@Component({
  selector: 'app-min-gol-club',
  templateUrl: './min-gol-club.component.html',
  styleUrls: ['./min-gol-club.component.css']
})
export class MinGolClubComponent implements OnInit {

  jugadores: any;

  constructor(private jugadoresService: JugadorService) { }

  ngOnInit() {
    this.getMinGolClub();
  }

  getMinGolClub() {
    this.jugadoresService.getMinGolClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

}

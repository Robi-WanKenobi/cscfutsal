import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-stats-club',
  templateUrl: './stats-club.component.html',
  styleUrls: ['./stats-club.component.css']
})
export class StatsClubComponent implements OnInit {

  jugadores = {};
  selectedRanking;

  constructor(private jugadoresService: JugadorService) { }

  ngOnInit() {
    this.selectedRanking = 0;
    this.switchStat();
  }

  switchStat() {
    if (this.selectedRanking == 0) {
      this.getMaxGolesClub();
    }
    if (this.selectedRanking == 1) {
      this.getMaxAsisClub();
    }
    if (this.selectedRanking == 2) {
      this.getMaxAmonClub();
    }
    if (this.selectedRanking == 3) {
      this.getMinGolClub();
    }
  }

  getMaxGolesClub() {
    this.jugadoresService.getMaxGolsClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  getMaxAsisClub() {
    this.jugadoresService.getMaxAsisClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  getMaxAmonClub() {
    this.jugadoresService.getMaxAmonClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }

  getMinGolClub() {
    this.jugadoresService.getMinGolClub().then((res) => {
      this.jugadores = res;
    }, (err) => {
      console.log(err);
    });
  }
}

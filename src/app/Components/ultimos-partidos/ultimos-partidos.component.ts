import { Component, OnInit } from '@angular/core';
import { PartidosService} from '../../Services/partidos.service';

@Component({
  selector: 'app-ultimos-partidos',
  templateUrl: './ultimos-partidos.component.html',
  styleUrls: ['./ultimos-partidos.component.css']
})

export class UltimosPartidosComponent implements OnInit {

  partidoSeniorA: {};
  partidoSeniorB: {};
  partidoSeniorC: {};
  partidoJuvenilA: {};
  partidoJuvenilB: {};
  partidoJuvenilC: {};

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    this.setJornadaActual();
  }

  setJornadaActual() {
    this.partidosService.getJornadaActual().then((res) => {
      console.log(res);
      this.getLastSeniorAPartido(res);
      this.getLastSeniorBPartido(res);
      this.getLastSeniorCPartido(res);
      this.getLastJuvenilAPartido(res);
      this.getLastJuvenilBPartido(res);
      this.getLastJuvenilCPartido(res);
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorAPartido(jornada) {
    this.partidosService.getPartidoSeniorA(jornada).then((res) => {
      this.partidoSeniorA = res;
      console.log(this.partidoSeniorA);
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.partidoSeniorB = res;
      console.log(this.partidoSeniorB);
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.partidoSeniorC = res;
      console.log(this.partidoSeniorC);
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.partidoJuvenilA = res;
      console.log(this.partidoJuvenilA);
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.partidoJuvenilB = res;
      console.log(this.partidoJuvenilB);
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.partidoJuvenilC = res;
      console.log(this.partidoJuvenilC);
    }, (err) => {
      console.log(err);
    });
  }
}

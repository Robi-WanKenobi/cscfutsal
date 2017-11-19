import { Component, OnInit } from '@angular/core';
import { PartidosService} from '../../Services/partidos.service';

@Component({
  selector: 'app-proximos-partidos',
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent implements OnInit {

  partidoSeniorA: {};
  partidoSeniorB: {};
  partidoSeniorC: {};
  partidoJuvenilA: {};
  partidoJuvenilB: {};
  partidoJuvenilC: {};

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    this.setNextJornada();
  }

  setNextJornada() {
    this.partidosService.getJornadaProxima().then((res) => {
      console.log(res);
      this.getNextSeniorAPartido(res);
      this.getNextSeniorBPartido(res);
      this.getNextSeniorCPartido(res);
      this.getNextJuvenilAPartido(res);
      this.getNextJuvenilBPartido(res);
      this.getNextJuvenilCPartido(res);
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorAPartido(jornada) {
    this.partidosService.getPartidoSeniorA(jornada).then((res) => {
      this.partidoSeniorA = res;
      console.log(this.partidoSeniorA);
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.partidoSeniorB = res;
      console.log(this.partidoSeniorB);
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.partidoSeniorC = res;
      console.log(this.partidoSeniorC);
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.partidoJuvenilA = res;
      console.log(this.partidoJuvenilA);
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.partidoJuvenilB = res;
      console.log(this.partidoJuvenilB);
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.partidoJuvenilC = res;
      console.log(this.partidoJuvenilC);
    }, (err) => {
      console.log(err);
    });
  }

}

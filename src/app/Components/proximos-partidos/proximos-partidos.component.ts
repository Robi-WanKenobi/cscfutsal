import {Component, Input, OnInit} from '@angular/core';
import { PartidosService} from '../../Services/partidos.service';

@Component({
  selector: 'app-proximos-partidos',
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.css']
})
export class ProximosPartidosComponent implements OnInit {

  @Input() partidoSeniorA: {};
  @Input() partidoSeniorB: {};
  @Input() partidoSeniorC: {};
  @Input() partidoJuvenilA: {};
  @Input() partidoJuvenilB: {};
  @Input() partidoJuvenilC: {};

  loading: boolean;

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    this.loading = true;
    this.setNextJornada();
  }

  setNextJornada() {
    this.partidosService.getJornadaProxima().then((res) => {
      this.loading = false;
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
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.partidoSeniorB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.partidoSeniorC = res;
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.partidoJuvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.partidoJuvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getNextJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.partidoJuvenilC = res;
    }, (err) => {
      console.log(err);
    });
  }

}

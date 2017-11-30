import {Component, Input, OnInit} from '@angular/core';
import { PartidosService} from '../../Services/partidos.service';

@Component({
  selector: 'app-ultimos-partidos',
  templateUrl: './ultimos-partidos.component.html',
  styleUrls: ['./ultimos-partidos.component.css']
})

export class UltimosPartidosComponent implements OnInit {

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
    this.setJornadaActual();
  }

  setJornadaActual() {
    this.partidosService.getJornadaActual().then((res) => {
      this.loading = false;
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
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorBPartido(jornada) {
    this.partidosService.getPartidoSeniorB(jornada).then((res) => {
      this.partidoSeniorB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorCPartido(jornada) {
    this.partidosService.getPartidoSeniorC(jornada).then((res) => {
      this.partidoSeniorC = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilAPartido(jornada) {
    this.partidosService.getPartidoJuvenilA(jornada).then((res) => {
      this.partidoJuvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilBPartido(jornada) {
    this.partidosService.getPartidoJuvenilB(jornada).then((res) => {
      this.partidoJuvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilCPartido(jornada) {
    this.partidosService.getPartidoJuvenilC(jornada).then((res) => {
      this.partidoJuvenilC = res;
    }, (err) => {
      console.log(err);
    });
  }
}

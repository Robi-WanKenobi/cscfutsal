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
  @Input() partidoJuvenilA: {};
  @Input() partidoJuvenilB: {};
  @Input() partidoCadeteA: {};

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
      this.getNextJuvenilAPartido(res);
      this.getNextJuvenilBPartido(res);
      this.getNextCadeteAPartido(res);
    }, (err) => {
      console.log(err);
    });
  }

  getNextSeniorAPartido(jornada) {
    this.partidosService.getPartidoSeniorA(jornada).then((res) => {
      this.partidoSeniorA = res;
      console.log(res);
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

  getNextCadeteAPartido(jornada) {
    this.partidosService.getPartidoCadeteA(jornada + 2).then((res) => {
      console.log(jornada + 2);
      this.partidoCadeteA = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}

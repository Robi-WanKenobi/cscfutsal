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
  @Input() partidoJuvenilA: {};
  @Input() partidoJuvenilB: {};
  @Input() partidoCadeteA: {};

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
      this.getLastJuvenilAPartido(res);
      this.getLastJuvenilBPartido(res);
      this.getLastCadeteAPartido(res);
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorAPartido(jornada) {
    this.partidosService.getPartidos('SeniorA', jornada).then((res) => {
      this.partidoSeniorA = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastSeniorBPartido(jornada) {
    this.partidosService.getPartidos('SeniorB', jornada).then((res) => {
      this.partidoSeniorB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilAPartido(jornada) {
    this.partidosService.getPartidos('JuvenilA', jornada).then((res) => {
      this.partidoJuvenilA = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastJuvenilBPartido(jornada) {
    this.partidosService.getPartidos('JuvenilB', jornada).then((res) => {
      this.partidoJuvenilB = res;
    }, (err) => {
      console.log(err);
    });
  }

  getLastCadeteAPartido(jornada) {
    this.partidosService.getPartidos('CadetA', jornada).then((res) => {
      this.partidoCadeteA = res;
    }, (err) => {
      console.log(err);
    });
  }
}

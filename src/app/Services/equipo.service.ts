import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EquipoService {

  constructor(private http: Http) { }

  getJornadaActual() {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/jornada/actual')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJugadores(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('jugadores/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getClasificacion() {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/clasificacion/')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getResultados(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/resultados/seniorA/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

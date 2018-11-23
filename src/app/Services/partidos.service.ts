import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PartidosService {

  constructor(private http: Http) { }

  getJornadaActual() {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/jornada/actual')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJornadaProxima() {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/jornada/proxima')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidos(equipo, jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/' + equipo + '/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

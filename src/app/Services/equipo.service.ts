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
      this.http.get('jugadores/equipo/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTecnics(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('jugadores/tecnicos/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getClasificacion(equipo, jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/clasificacion/' + equipo + '/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getResultados(equipo, jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/resultados/' + equipo + '/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCalendario(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('equipos/calendario/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxGols(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_goles/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxAsis(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_asis/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxAmon(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_amon/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

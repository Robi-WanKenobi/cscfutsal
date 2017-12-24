import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JugadorService {

  constructor(private http: Http) { }

  getAllJugadores() {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxGolsClub() {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_goles_club')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMinGolClub() {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/min_gol_club')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getMaxAsisClub() {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_asis_club')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxAmonClub() {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/max_amon_club')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJugador(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/jugadores/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }
}

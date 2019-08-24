import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JugadorService {

  token = localStorage.getItem('token');
  baseURL = '/jugador/';

  constructor(private http: Http) { }

  getJugador(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }
  
  saveJugador(data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL, data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateJugador(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL + id, data, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  uploadImage(id, image) {
    const headers = new Headers({ 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + 'image/' + id, image, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteJugador(idjugador, idequipo) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseURL + idjugador + '/' + idequipo, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  getMaxGolsClub() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'stats/goles')
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
      this.http.get(this.baseURL + 'stats/porteros')
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
      this.http.get(this.baseURL + 'stats/asistencias')
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
      this.http.get(this.baseURL + 'stats/tarjetas')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

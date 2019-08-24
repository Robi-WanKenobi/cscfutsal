import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EquipoService {

  token = localStorage.getItem('token');
  baseURL = '/equipo/';

  constructor(private http: Http) { }

  getEquipos(){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEquipo(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveEquipo(data) {
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

  deleteEquipo(id) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseURL + id, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateEquipo(id, data) {
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

  getCronicas(){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'cronicas/all')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCronica(idequipo, jornada){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + idequipo + '/cronicas/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJugadores(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'jugadores/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTecnicos(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'tecnicos/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addJugadorToEquipo(equipo, jugador){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + equipo + '/add-jugador/' + jugador, null, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  removeJugadorFromEquipo(equipo, jugador){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + equipo + '/remove-jugador/' + jugador, null, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addCronicaToEquipo(equipo, cronica){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + equipo + '/add-cronica/' + cronica, null, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  removeCronicaFromEquipo(equipo, cronica){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + equipo + '/remove-cronica/' + cronica, null, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJornadaActual(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'jornada/num/' + equipo)
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
      this.http.get(this.baseURL + 'clasificacion/' + equipo + '/' + jornada)
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
      this.http.get(this.baseURL + 'resultados/' + equipo + '/' + jornada)
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
      this.http.get(this.baseURL + 'calendario/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartido(equipo, jornada) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + 'jornada/' + equipo + '/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

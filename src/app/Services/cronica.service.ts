import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CronicaService {

  token = localStorage.getItem('token');
  baseURL = '/cronica/';

  constructor(private http: Http) {
  }

  saveCronica(data) {
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

  getCronica(id) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + id, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteCronica(idcronica, idequipo) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseURL + idcronica + '/' + idequipo, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateCronica(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL +  id, data, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  addToGols(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + id + '/goleadores/', data, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addToAsis(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + id + '/asistentes/', data, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addToAmarillas(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + id + '/amarillas/', data, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addToRojas(id, data) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + id + '/rojas/', data, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delFromGols(id, idjugador) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL + id + '/goleadores/' + idjugador, null, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delFromAsis(id, idjugador) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL + id + '/asistentes/' + idjugador, null, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delFromAmarillas(id, idjugador) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL + id + '/amarillas/' + idjugador, null, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delFromRojas(id, idjugador) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.put(this.baseURL + id + '/rojas/' + idjugador, null, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

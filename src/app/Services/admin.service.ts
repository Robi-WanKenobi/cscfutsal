import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  token = localStorage.getItem('token');

  constructor(private http: Http) { }

  Login(admin) {
    return new Promise((resolve, reject) => {
      this.http.post('/admin/login', admin)
        .map(res => {
          // If request fails, throw an Error that will be caught
          if (res.status === 500) {
            throw new Error('Error al iniciar sesió');
          }
          if (res.status === 404) {
            throw new Error('Dades incorrectes');
          }
          // If everything went fine, return the response
          if (res.status === 200) {
            let data = res.json();
            if (data.token) {
              return data;
            }
          }
        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllJugadores() {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get('/admin/jugadores', options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJugador(id) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get('/admin/jugadores/' + id, options)
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
      this.http.post('/admin/jugadores/', data, options)
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
      this.http.put('/admin/jugadores/' + id, data, options)
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
      this.http.post('/admin/image/' + id, image, options)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteJugador(id) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    const options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.delete('/admin/jugadores/' + id, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

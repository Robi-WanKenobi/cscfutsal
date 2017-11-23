import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JugadorService {

  constructor(private http: Http) { }

  getAllJugadores() {
    return new Promise((resolve, reject) => {
      this.http.get('/admin/jugadores')
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
      this.http.get('/admin/jugadores/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveJugador(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/admin/jugadores/', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateJugador(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/admin/jugadores/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteJugador(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/admin/jugadores/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

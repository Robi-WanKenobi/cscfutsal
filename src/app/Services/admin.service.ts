import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

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
          if (res.status === 200){
            let data = res.json();
            if (data.token) {
              return data.token;
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
    return new Promise((resolve, reject) => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const token = currentUser.token;
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

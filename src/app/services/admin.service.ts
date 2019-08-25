import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  token = localStorage.getItem('token');
  baseURL = '/admin/';

  constructor(private http: Http) { }

  login(admin) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + 'login', admin)
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
            const data = res.json();
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
}

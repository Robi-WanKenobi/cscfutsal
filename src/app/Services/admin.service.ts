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
}

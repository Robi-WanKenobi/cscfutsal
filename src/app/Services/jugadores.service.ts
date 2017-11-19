import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JugadoresService {

  constructor(private http: Http) { }

  getJugadores(equipo) {
    return new Promise((resolve, reject) => {
      this.http.get('jugadores/' + equipo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

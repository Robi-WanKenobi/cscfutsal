import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PartidosService {

  constructor(private http: Http) { }

  getJornadaActual() {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/jornada/actual')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getJornadaProxima() {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/jornada/proxima')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidoSeniorA(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/seniorA/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidoSeniorB(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/seniorB/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidoJuvenilA(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/juvenilA/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidoJuvenilB(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/juvenilB/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPartidoCadeteA(jornada) {
    return new Promise((resolve, reject) => {
      this.http.get('partidos/cadeteA/' + jornada)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorService } from '../../Services/jugador.service';

@Component({
  selector: 'app-jugador-details',
  templateUrl: './jugador-details.component.html',
  styleUrls: ['./jugador-details.component.css']
})
export class JugadorDetailsComponent implements OnInit {

 @Input() jugador: {};

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private router: Router) { }

  ngOnInit() {
    this.getJugador(this.route.snapshot.params['id']);
  }

  getJugador(id) {
    this.jugadorService.getJugador(id).then((res) => {
      this.jugador = res;
      console.log(this.jugador);
    }, (err) => {
      console.log(err);
    });
  }

}

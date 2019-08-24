import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../Services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public equipos: {};

  constructor(private equipoService: EquipoService,
              private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.getEquipos()
  }

  getEquipos() {
    this.equipoService.getEquipos().then((res) => {
      this.equipos = res;
    }, (err) => {
      console.log(err);
    });
  }

  navigateToEquipo(idEquipo){
    this.router.navigate(['/equip'],{queryParams: {equipo: idEquipo}});
  }

}

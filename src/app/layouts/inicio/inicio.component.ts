import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public current;
  public next;
  public current_title = 'ÚLTIMS PARTITS';
  public next_title = 'PROPERS PARTITS';
  public current_key = 'c';
  public next_key = 'n';

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquipos().then((res) => {
      this.getJornada(res[0]['_id']);
    }, (err) => {
      console.log(err);
    });
  }

  getJornada(equipoId){
    this.equipoService.getJornadaActual(equipoId).then((res) => {
      this.next = res;
      this.current = this.next - 1;
    }, (err) => {
      console.log(err);
    });
  }

}

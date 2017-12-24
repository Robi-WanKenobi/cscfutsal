import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer-sortida',
  templateUrl: './footer-sortida.component.html',
  styleUrls: ['./footer-sortida.component.css']
})
export class FooterSortidaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout()  {
    localStorage.clear();
    setTimeout(() => {this.router.navigate(['/inici']); }, 1000);
  }
  toMenu(){
    this.router.navigate(['/admin']);
  }
}

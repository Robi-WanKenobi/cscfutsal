import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  reloaded: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.reload();
  }

     reload() {
       if (!reloaded) {
         window.location.reload();
         this.reloaded = true;
       }
     }
  
     toPlantillas() {
       this.router.navigate(['/admin-plantilles']);
     }

     toCronicas() {
        this.router.navigate(['/admin-croniques']);
     }

     toStats() {
        this.router.navigate(['/admin-stats']);
     }
}

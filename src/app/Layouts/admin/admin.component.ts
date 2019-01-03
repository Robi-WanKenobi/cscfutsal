import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router: Router) { }

    ngOnInit() {
      let win = (window as any);
      if(win.location.search !== '?logged=csc_admin' ) {
          this.router.navigate(['/admin'], { queryParams: { logged: 'csc_admin' } });
          win.location.reload();
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

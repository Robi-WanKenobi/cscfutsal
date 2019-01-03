import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      if(this.route.queryParams['logged'] !== 'csc_admin' ) {
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

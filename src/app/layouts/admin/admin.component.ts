import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      if(this.route.snapshot.queryParams['logged'] !== 'csc_admin' ) {
          this.router.navigate(['/admin'], { queryParams: { logged: 'csc_admin' } });
          setTimeout(() => {window.location.reload(); }, 250);
      }
    }
  
      toEquipos() {
        this.router.navigate(['/admin/admin-equips']);
      }

     toCronicas() {
        this.router.navigate(['/admin/admin-croniques']);
     }

     toStats() {
        this.router.navigate(['/admin/admin-stats']);
     }
}

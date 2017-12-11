import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router){}

  canActivate() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // "csc_admin"

    if ((token) && (role === 'csc_admin')) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['login']);
    return false;
  }
}

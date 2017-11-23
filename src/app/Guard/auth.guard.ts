import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token; // your token
    if (token) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}

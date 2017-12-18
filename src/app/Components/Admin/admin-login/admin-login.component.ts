import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  usuario: string;
  password: string;
  status: string;
  public data: {};

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.adminService.Login({'usuario': this.usuario, 'password': this.password}).then((res) => {
      this.data = res;
      localStorage.setItem('token', this.data['token']);
      localStorage.setItem('role', this.data['role']);
      this.status = 'success';
      setTimeout(() => {this.status = ''; }, 1500);
      setTimeout(() => {this.router.navigate(['admin']); }, 1500);
    }, (err) => {
      console.log(err);
      this.status = 'error';
      setTimeout(() => {this.status = ''; }, 1500);
    });
  }
}

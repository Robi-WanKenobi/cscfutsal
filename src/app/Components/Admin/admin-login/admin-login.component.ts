import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  usuario: string;
  password: string;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  login() {
    this.adminService.Login({'usuario': this.usuario, 'password': this.password}).then((res) => {
      localStorage.setItem('currentUser', JSON.stringify({ token: res}));
      console.log(localStorage.getItem('currentUser'));
    }, (err) => {
      console.log(err);
      alert('Dades incorrectes');
    });
  }
}

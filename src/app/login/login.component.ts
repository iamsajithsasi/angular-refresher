import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: AppService) {}
  hide: boolean = true;
  token: any = '';

  ngOnInit(): void {
    this.token = localStorage?.getItem('token');
    if (this.token) {
      this.service.reDirect('/table');
    } else {
      this.service.reDirect('/login');
    }
  }

  onSubmit(loginForm: any) {
    let token = loginForm.email + ' - ' + Math.floor(Math.random() * 100);
    localStorage.setItem('token', token);
    this.service.reDirect('/table');
  }
}

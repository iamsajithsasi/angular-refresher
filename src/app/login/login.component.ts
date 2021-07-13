import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  hide: boolean = true;
  token: any = '';

  ngOnInit(): void {
    this.token = localStorage?.getItem('token');
    if (this.token) {
      this.router.navigateByUrl('/dashboard/blog');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  onSubmit(loginForm: any) {
    let token = loginForm.email + ' - ' + Math.floor(Math.random() * 100);
    localStorage.setItem('token', token);
  }
}

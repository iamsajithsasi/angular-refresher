import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  token: any = '';

  ngOnInit() {
    console.log('iniit')
    this.token = localStorage?.getItem('token');
    if (this.token) {
      this.router.navigateByUrl('/dashboard/blog');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}

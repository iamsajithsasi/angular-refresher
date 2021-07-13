import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private service: AppService) {}
  token: any = '';

  ngOnInit() {
    console.log('iniit');
    this.token = localStorage?.getItem('token');
    if (this.token) {
      this.service.reDirect('/table');
    } else {
      this.service.reDirect('/login');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: AppService) {}
  backgroundColor = environment.color;

  ngOnInit(): void {
    console.log('init: header init');
  }

  isLoggedIn() {
    return this.service.isToken();
  }

  logout() {
    localStorage.clear();
    this.service.reDirect('/login');
  }
}

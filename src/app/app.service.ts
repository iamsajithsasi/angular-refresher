import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private router: Router) {}
  isToken() {
    return !!localStorage.getItem('token');
  }
  reDirect(path: string) {
    this.router.navigateByUrl(path);
  }
}

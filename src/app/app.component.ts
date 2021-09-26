import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Angular Dashboard"
  constructor() { }
  
  SignUp: FormGroup = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
    console.log("initilized");

  }

  submitFn(e:any) {
    e.preventDefault();
    console.log(this.SignUp.value);
  }
}
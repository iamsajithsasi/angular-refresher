import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardData = [];
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.cardData = this.data;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableComponent, CardsComponent],
  exports: [TableComponent, CardsComponent],
})
export class SharedModule {}

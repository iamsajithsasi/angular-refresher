import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const matComponents = [
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [matComponents],
  exports: [matComponents],
})
export class MaterialmodModule {}

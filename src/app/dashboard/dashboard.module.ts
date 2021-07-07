import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}

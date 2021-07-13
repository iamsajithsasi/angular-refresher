import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared.component';
import { DashboardComponent } from './dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [DashboardComponent, BlogComponent, GraphsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}

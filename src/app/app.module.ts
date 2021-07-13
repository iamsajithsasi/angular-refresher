import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmodModule } from './materialmod.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    WorkbenchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    MaterialmodModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

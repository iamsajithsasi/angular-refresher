import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

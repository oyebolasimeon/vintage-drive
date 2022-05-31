import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardSidebarComponent } from './Components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './Components/dashboard/dashboard-navbar/dashboard-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

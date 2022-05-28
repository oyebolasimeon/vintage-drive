import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ClientComponent } from './Components/dashboard/client/client.component';
import { VehicleComponent } from './Components/dashboard/vehicle/vehicle.component';
import { ServicesComponent } from './Components/dashboard/services/services.component';
import { QuoteComponent } from './Components/dashboard/quote/quote.component';
import { InvoiceComponent } from './Components/dashboard/invoice/invoice.component';
import { StaffComponent } from './Components/dashboard/staff/staff.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardSidebarComponent } from './Components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './Components/dashboard/dashboard-navbar/dashboard-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LogoutComponent,
    HomeComponent,
    ClientComponent,
    VehicleComponent,
    ServicesComponent,
    QuoteComponent,
    InvoiceComponent,
    StaffComponent,
    SignupComponent,
    PagenotfoundComponent,
    NavbarComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

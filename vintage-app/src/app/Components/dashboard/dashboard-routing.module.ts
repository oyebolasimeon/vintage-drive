import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

import { CommonModule } from '@angular/common';

import { DashboardRoutingRoutingModule } from './dashboard-routing-routing.module';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';
import { StaffComponent } from './staff/staff.component';
import { ClientComponent } from './client/client.component';
import { ServicesComponent } from './services/services.component';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    HomeComponent,
    InvoiceComponent,
    QuoteComponent,
    StaffComponent,
    ClientComponent,
    ServicesComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingRoutingModule
  ]

})
export class DashboardRoutingModule { }

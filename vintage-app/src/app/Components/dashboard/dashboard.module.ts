import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BoardComponent } from './board/board.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [ ClientComponent, InvoiceComponent, BoardComponent, MyProfileComponent, StaffComponent, QuoteComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

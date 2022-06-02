import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { StaffComponent } from './staff/staff.component';
import { BoardComponent } from './board/board.component';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
<<<<<<< HEAD
  declarations: [ ClientComponent, InvoiceComponent, BoardComponent, MyProfileComponent, StaffComponent, QuoteComponent],
=======
  declarations: [ClientComponent,
                InvoiceComponent,
                BoardComponent,
                MyProfileComponent,
                StaffComponent,
                InvoiceComponent,
                VehicleComponent],
>>>>>>> aa78f6ba4649f7ae043650cad12c2191cf3f107a
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

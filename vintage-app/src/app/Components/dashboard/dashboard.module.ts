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
import { PreloaderComponent } from './preloader/preloader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/Preloader/interceptor.service';


@NgModule({
  declarations: [ClientComponent,
                InvoiceComponent,
                BoardComponent,
                MyProfileComponent,
                StaffComponent,
                InvoiceComponent,
                VehicleComponent,
                PreloaderComponent,
              ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class DashboardModule { }

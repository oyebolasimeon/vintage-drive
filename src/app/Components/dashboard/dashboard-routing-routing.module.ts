import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';
import { ServiceComponent } from './service/service.component';
import { StaffComponent } from './staff/staff.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'quote', component: QuoteComponent},
      {path: 'services', component: ServiceComponent},
      {path: 'staff', component: StaffComponent},
      {path: 'vehicle', component: VehicleComponent},
      {path: 'client', component: VehicleComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingRoutingModule { }

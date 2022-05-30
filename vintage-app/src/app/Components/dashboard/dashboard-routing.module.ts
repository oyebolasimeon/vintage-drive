import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { BoardComponent } from './board/board.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { StaffComponent } from './staff/staff.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: 'client', component: ClientComponent},
      { path: 'invoice', component: InvoiceComponent},
      { path: 'home', component: BoardComponent },
      { path: 'quote', component: QuoteComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'staff', component: StaffComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DashboardRoutingModule { }

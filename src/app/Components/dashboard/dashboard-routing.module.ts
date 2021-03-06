import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from 'src/app/Preloader/spinner/spinner.component';
import { AccessGuardGuard } from 'src/app/shared/access-guard.guard';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { BoardComponent } from './board/board.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { QuoteComponent } from './quote/quote.component';
import { ServiceComponent } from './service/service.component';
import { StaffComponent } from './staff/staff.component';
import { VehicleComponent } from './vehicle/vehicle.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
      { path: 'invoice', component: InvoiceComponent, canActivate:[AuthGuard] },
      { path: 'home', component: BoardComponent, canActivate:[AuthGuard] },
      { path: 'quote', component: QuoteComponent, canActivate:[AuthGuard] },
      { path: 'services', component: ServiceComponent, canActivate:[AuthGuard] },
      { path: 'vehicle', component: VehicleComponent, canActivate:[AuthGuard] },
      { path: 'my-profile', component: MyProfileComponent, canActivate:[AuthGuard] },
      { path: 'staff', component: StaffComponent, canActivate:[ AccessGuardGuard,
                                                                AuthGuard 
                                                              ]
      },
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

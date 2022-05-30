import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [
  {path:'login', component: SigninComponent},
  {path:'page-not-found', component: PagenotfoundComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'admin', 
    loadChildren: () => 
      import('./Components/dashboard/dashboard.module').then((s) => s.DashboardModule)},
  {path: '**', redirectTo: '/page-not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

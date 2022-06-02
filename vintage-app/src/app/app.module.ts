import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
import { TokenInterceptorService } from './service/token-interceptor.service';
import { SpinnerComponent } from './Preloader/spinner/spinner.component';
import { InterceptorService } from './Preloader/interceptor.service';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

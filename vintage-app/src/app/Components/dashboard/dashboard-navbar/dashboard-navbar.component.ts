import { Component, OnInit } from '@angular/core';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  facog = faCog;
  fasignout = faPowerOff;

  constructor( private router: Router) { }
  ngOnInit(): void {
  }

  loggedOut() {
    this.router.navigate(['/login']);
  }

}

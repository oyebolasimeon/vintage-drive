import { Component, OnInit } from '@angular/core';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  facog = faCog;
  fasignout = faPowerOff;

  constructor() { }
  ngOnInit(): void {
  }

}

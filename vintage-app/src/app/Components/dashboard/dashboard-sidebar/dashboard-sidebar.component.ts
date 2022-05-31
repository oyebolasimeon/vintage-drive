import { Component, OnInit } from '@angular/core';
import { faHome, faHeadset, faFileInvoice, faPen, faServer, faUser, faCar, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  fahome = faHome;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  faquote = faPen;
  faservice = faServer;
  fastaff = faUser;
  favehicle = faCar;
  faprofile = faUserAstronaut;


  constructor() { }

  ngOnInit(): void {
  }

}

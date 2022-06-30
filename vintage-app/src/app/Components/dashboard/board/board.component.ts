import { Component, OnInit } from '@angular/core';
import  { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { SpinnerService } from 'src/app/Preloader/spinner.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  name = localStorage.getItem('name');
  fauser = faUserCircle;
  totalClient: any;
  totalStaff: any;
  totalQuote: any;
  totalVehicle: any;

  constructor(private service: AuthService, public loaderService: SpinnerService) {

      this.service.GetStaff().subscribe(result => {
          this.totalStaff = result
          console.log(this.totalClient)
      })

      this.service.GetClient().subscribe(result => {
        this.totalClient = result
      })

      this.service.GetQuotes().subscribe(result => {
        this.totalQuote = result
      })

      this.service.GetVehicle().subscribe(result => {
        this.totalVehicle = result
      })

   }

  ngOnInit(): void {
  }

}

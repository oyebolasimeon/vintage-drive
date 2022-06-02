import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  stafflist: any;
  p: number = 1;

  constructor(private service:AuthService) {
      this.service.GetStaff().subscribe(result => {
        this.stafflist = result;
        console.log(this.stafflist.payload);
        
      } )
   }

  ngOnInit(): void {
  }

}


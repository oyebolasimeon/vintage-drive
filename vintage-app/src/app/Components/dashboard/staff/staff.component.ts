import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  stafflist: any;
  p: number = 1;
  postField = false;
  dataField = true;
  postBtnData = `Add New Staff `
  email= ''; name = ''; password=''; role='';
  staffData = { payload : {
    "name": this.name,
    "email": this.email,
    "password": this.password,
    "role": this.role
  }
  }
  

  constructor(private service:AuthService) {
      this.service.GetStaff().subscribe(result => {
        this.stafflist = result;
        console.log(this.stafflist.payload);
        
      } )
   }

   AddNewStaff = new FormGroup({
    email: new FormControl(" ", Validators.required),
    name: new FormControl(" ", Validators.required),
    password: new FormControl(" ", Validators.required),
    role: new FormControl(" ", Validators.required)
   })

  ngOnInit(): void {
  }

  showPostField(){
    if(this.postField === false && this.dataField === true){
      this.postField = true
      this.dataField = false
      this.postBtnData = "Exit"
    } else{
      this.postField = false
      this.dataField = true
      this.postBtnData = "Add New Staff"
    }

    return this.postField;
  }

  addStaff(){
      this.service.AddNewStaff(this.AddNewStaff.value).subscribe(result => {
        console.log(result);
      })
  }

}


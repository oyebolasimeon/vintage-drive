import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleList: any;
  clientList: any;
  p: number = 1;
  postField = false;
  dataField = true;
  postBtnData = `Add New Vehicle`
  @ViewChild('code')
  code: 'td' = "td";
  postRow :boolean | any = false;

 vehicleName = '';model = '';chassis = '';id = '';


  constructor(private service:AuthService, private toastr: ToastrService, private router: Router) {
      this.service.GetVehicle().subscribe(result => {
        this.vehicleList = result;
        console.log(this.vehicleList.payload);

      } );

      this.service.GetClient().subscribe(result => {
        this.clientList = result;
        console.log(this.clientList.payload);
      })
   }

   AddNewVehicle = new FormGroup({
    clientId: new FormControl(" ", Validators.required),
    vehicleName: new FormControl(" ", Validators.required),
    model: new FormControl(" ", Validators.required),
    chassis: new FormControl(" ", Validators.required),
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
      this.postBtnData = "Add New Vehicle"
    }

    return this.postField;
  }

  addVehicle(){
      this.service.AddNewVehicle(this.AddNewVehicle.value).subscribe(result => {
        console.log(result);
        this.toastr.success("New Vehicle Added Successfully")
      }, (error) => {
        this.toastr.error(error.message)
      })
  }

  removeVehicle(code: any){
    this.service.DeleteVehicle(code).subscribe(result => {
      console.log(result)
      this.toastr.info(`Vehicle_ID ${code} got deleted`)
      this.router.navigate(['/vehicles']);

    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  showID(value: any) {
    this.service.GetVehicleID(value).subscribe(result => {
      console.log(result);
      this.postRow = result;
      return this.postRow = true;
    })
  }
}

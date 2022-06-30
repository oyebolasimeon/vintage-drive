import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  p: number = 1;
  postField = false;
  dataField = true;
  postBtnData = `Add New Service `
  servicelist: any;
  name = '';

  constructor(private service:AuthService, private toastr: ToastrService, private router: Router) { 
      this.service.GetServices().subscribe(result => {
      this.servicelist = result;
      console.log(this.servicelist.payload);
      
    } )
  }

  AddNewService = new FormGroup({
    name: new FormControl(" ", Validators.required)
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
      this.postBtnData = "Add New Service"
    }

    return this.postField;
  }

  addService(){
    this.service.AddNewService(this.AddNewService.value).subscribe(result => {
      console.log(result);
      this.toastr.success("New Service Added Successfully")
    }, (error) => {
      this.toastr.error(error.message)
    })
}

removeService(code: any){
  this.service.DeleteService(code).subscribe(result => {
    console.log(result)
    this.toastr.info(`Service_ID ${code} got deleted`)
    this.router.navigate(['/admin/service']);
    
  }, (error) => {
    this.toastr.error(error.message)
  })
}

updateService(code: any){
    
}



}

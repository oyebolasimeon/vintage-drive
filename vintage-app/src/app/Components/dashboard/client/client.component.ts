import { TagDefinition } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

clientList: any;
  p: number = 1;
  postField = false;
  dataField = true;
  postBtnData = `Add New Client`
  email= ''; name = ''; telephone='';
  @ViewChild('code')
  code: 'td' = "td";


  constructor(private service:AuthService, private toastr: ToastrService, private router: Router) {
      this.service.GetClient().subscribe(result => {
        this.clientList = result;
        console.log(this.clientList.payload);

      } )
   }

   AddNewClient = new FormGroup({
    email: new FormControl(" ", Validators.required),
    name: new FormControl(" ", Validators.required),
    telephone: new FormControl(" ", Validators.required),
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

  addClient(){
      this.service.AddNewClient(this.AddNewClient.value).subscribe(result => {
        console.log(result);
        this.toastr.success("New Client Added Successfully")
      }, (error) => {
        this.toastr.error(error.message)
      })
  }

  removeClient(code: any){
    this.service.DeleteClient(code).subscribe(result => {
      console.log(result)
      this.toastr.info(`Client_ID ${code} got deleted`)
      this.router.navigate(['/clients']);

    }, (error) => {
      this.toastr.error(error.message)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    email = '';
    password = '';
    responseData: any;

    falock = faLock;
  constructor( private service:AuthService, private router:Router, private toastr: ToastrService) { 
    this.service.logout();
  }

  Login = new FormGroup({
            email: new FormControl(" ", Validators.required),
            password: new FormControl(" ", Validators.required)
  })

  ngOnInit(): void {
  }

  ProceedLogin(){
    if(this.Login.valid){
      this.service.proceedLogin(this.Login.value).subscribe(results =>{
        if(results != null){
            this.responseData = results;
            localStorage.setItem('token', this.responseData.payload.token);
            localStorage.setItem('name', this.responseData.payload.name)
            localStorage.setItem('email', this.responseData.payload.email)
            localStorage.setItem('role', this.responseData.payload.role)
            this.router.navigate(['/admin'])
            this.toastr.success("Login Successful")
        }
      }, (error) =>{ 
        this.toastr.error("Bad/Invalid Request Made to Vintage AutoCare")
      })
    } 
  }

}

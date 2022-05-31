import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';


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
  constructor( private service:AuthService, private router:Router) { 
    localStorage.clear();
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
            this.router.navigate(['/admin'])
        }
      })
    } 
  }

}

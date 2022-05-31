import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "https://lightup-autocare.herokuapp.com/staffs/login"

  constructor(private http:HttpClient) { }

  proceedLogin(userCred:any){
    return this.http.post(this.API_URL, userCred)
  }
}

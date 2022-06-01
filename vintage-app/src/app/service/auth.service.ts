import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = {
    "staff": "/staffs",
    "vehicle": "/vehicles",
    "invoice": "/invoices"
  }

  BASE_URL = "https://lightup-autocare.herokuapp.com"
  LOGIN_URL = this.BASE_URL + this.endpoint.staff + "/login";


  constructor(private http: HttpClient) { }

  proceedLogin(userCred: any) {
    return this.http.post(this.LOGIN_URL, userCred)
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetStaff(){
    return this.http.get(`${this.BASE_URL+this.endpoint.staff}`)
  }
}

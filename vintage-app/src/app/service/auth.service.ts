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
    "invoice": "/invoices",
    "signup": "/signup"
    "quote": "/quotes",
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

  //Staff Endpoint

  GetStaff(){
    return this.http.get(`${this.BASE_URL+this.endpoint.staff}`)
  }
  AddNewStaff(staffCred: any){
    return this.http.post(`${this.BASE_URL+this.endpoint.staff+this.endpoint.signup}`, staffCred)
  }
  DeleteStaff(staffCode: any){
    return this.http.delete(`${this.BASE_URL+this.endpoint.staff+"/"+staffCode}`)
  }
   //Quote Endpoints
  QuoteList() {
    return this.http.get(`${this.BASE_URL+this.endpoint.quote}`)
  }
}

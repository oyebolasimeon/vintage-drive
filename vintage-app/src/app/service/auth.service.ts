import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = {
    "staff": "/staffs",
    "vehicle": "/vehicles",
    "invoice": "/invoices",
    "signup": "/signup",
    "quote": "/quotes",
    "client": "/clients",
    "service": "/personalisedservices"

  }

  private BASE_URL = "https://lightup-autocare.herokuapp.com";
  private ALT_URL = "https://lightup-auto-care.herokuapp.com";
  private LOGIN_URL = this.BASE_URL + this.endpoint.staff + "/login";


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
  UpdateStaff(staffData: any){
    const httpOpts = {
      headers : new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(`${this.BASE_URL+this.endpoint.staff+"/"+staffData.id}`, staffData, httpOpts)
  }

  // Quote Endpoint
  GetQuotes() {
    return this.http.get(`${this.BASE_URL+this.endpoint.quote}`)
  }
  AddNewQuote(quoteCred: any){
    return this.http.post(`${this.ALT_URL+this.endpoint.quote}`, quoteCred)
  }


  // Clients endpoint
  GetClient() {
    return this.http.get(`${this.BASE_URL+this.endpoint.client}`)
  }
  AddNewClient(clientCred: any){
    return this.http.post(`${this.BASE_URL+this.endpoint.client}`, clientCred)
  }
  DeleteClient(clientCode: any){
    return this.http.delete(`${this.BASE_URL+this.endpoint.client+"/"+clientCode}`)
  }
  GetClientID(clientID: any) {
    return this.http.get(`${this.BASE_URL+this.endpoint.client+"/"+clientID}`)
  }
  // update operation to do

  // Invoices endpoints
  GetInvoice() {
    return this.http.get(`${this.BASE_URL+this.endpoint.invoice}`)
  }
  AddNewInvoice(invoiceCred: any){
    return this.http.post(`${this.BASE_URL+this.endpoint.invoice}`, invoiceCred)
  }
  DeleteInvoice(invoiceCode: any){
    return this.http.delete(`${this.BASE_URL+this.endpoint.invoice+"/"+invoiceCode}`)
  }
  // update operation to do

  // Services Endpoint
  GetServices() {
    return this.http.get(`${this.BASE_URL+this.endpoint.service}`)
  }
  AddNewService(serviceCred: any){
    return this.http.post(`${this.BASE_URL+this.endpoint.service}`, serviceCred)
  }
  DeleteService(serviceCode: any){
    return this.http.delete(`${this.BASE_URL+this.endpoint.service+"/"+serviceCode}`)
  }
  GetServicesID (servicesID: any) {
    return this.http.get(`${this.BASE_URL+this.endpoint.service+"/"+servicesID}`)
  }

  //vehicle endpoints
  GetVehicle() {
    return this.http.get(`${this.BASE_URL+this.endpoint.vehicle}`)
  }
  AddNewVehicle(vehicleCred: any){
    return this.http.post(`${this.BASE_URL+this.endpoint.vehicle}`, vehicleCred)
  }
  DeleteVehicle(vehicleCred: any){
    return this.http.delete(`${this.BASE_URL+this.endpoint.vehicle+"/"+vehicleCred}`)
  }
  GetVehicleID (vehicleID:any) {
    return this.http.get(`${this.BASE_URL+this.endpoint.vehicle+ "/"+vehicleID}`)
  }

   //Quote Endpoints
  QuoteList() {
    return this.http.get(`${this.BASE_URL+this.endpoint.quote}`)

  }
}


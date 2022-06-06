import { TagDefinition } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoiceList: any;
  p: number = 1;
  postField = false;
  dataField = true;
  postBtnData = `Add New Invoice`
  item= ''; rate = ''; unit='';
  @ViewChild('code')
  code: 'td' = "td";


  constructor(private service:AuthService, private toastr: ToastrService, private router: Router) {
      this.service.GetInvoice().subscribe(result => {
        this.invoiceList = result;
        console.log(this.invoiceList.payload);

      } )
   }

   AddNewInvoice = new FormGroup({
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

  addInvoice(){
      this.service.AddNewInvoice(this.AddNewInvoice.value).subscribe(result => {
        console.log(result);
        this.toastr.success("New Invoice Added Successfully")
      }, (error) => {
        this.toastr.error(error.message)
      })
  }

  removeInvoice(code: any){
    this.service.DeleteInvoice(code).subscribe(result => {
      console.log(result)
      this.toastr.info(`Invoice_ID ${code} got deleted`)
      this.router.navigate(['/invoice']);

    }, (error) => {
      this.toastr.error(error.message)
    })
  }

}

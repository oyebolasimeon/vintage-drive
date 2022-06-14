import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  item = ''; rates = ''; units = '';
  @ViewChild('code')
  code: 'td' = "td";


  constructor(private fb: FormBuilder, private service: AuthService, private toastr: ToastrService, private router: Router) {
    this.service.GetInvoice().subscribe(result => {
      this.invoiceList = result;
      console.log(this.invoiceList.payload);

    })
  }

  AddNewInvoice = this.fb.group({

    billingAddress: this.fb.group({
      repName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      state: ['', Validators.required]
    }),

    items: this.fb.group({
      item: ['', Validators.required],
      unit: ['', Validators.required],
      rate: ['', Validators.required],
      // amount: [this.calculateAmt()]
    }),

    clientName: ['', Validators.required],
    vehicleName: ['', Validators.required]

  })

  ngOnInit(): void {
  }

  // calculateAmt() {
  //   const amt = this.AddNewInvoice.get('clientName').value
  //   // * this.AddNewInvoice.value.items.unit
  //   // console.log(amt)

  // }

  showPostField() {
    if (this.postField === false && this.dataField === true) {
      this.postField = true
      this.dataField = false
      this.postBtnData = "Exit"
    } else {
      this.postField = false
      this.dataField = true
      this.postBtnData = "Add New Invoice"
    }

    return this.postField;
  }

  onSubmit() {
    console.warn(this.AddNewInvoice.value)
  }
  addInvoice() {
    let payload = this.AddNewInvoice.value




    console.log(payload)
    this.service.AddNewInvoice(payload).subscribe(result => {
      console.log(result);
      this.toastr.success("New Invoice Added Successfully")
    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  removeInvoice(code: any) {
    this.service.DeleteInvoice(code).subscribe(result => {
      console.log(result)
      this.toastr.info(`Invoice_ID ${code} got deleted`)
      this.router.navigate(['/invoice']);

    }, (error) => {
      this.toastr.error(error.message)
    })
  }

}

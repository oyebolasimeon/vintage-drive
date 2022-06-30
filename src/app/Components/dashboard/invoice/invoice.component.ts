import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
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
  x : any;
  postField = false;
  dataField = true;
  postBtnData = `Add New Invoice`
  @ViewChild('code')
  code: 'td' = "td";


  constructor(private fb: FormBuilder, private service: AuthService, private toastr: ToastrService, private router: Router) {
    this.service.GetInvoice().subscribe(result => {
      this.invoiceList = result;
      console.log(this.invoiceList.payload);

    })
  }

  ngOnInit(): void {

    this.x = this.AddNewInvoice.get(['items', 'item'])?.value * this.AddNewInvoice.get(['items', 'rate'])?.value;
    return this.x;
  }

  AddNewInvoice = this.fb.group({

    billingAddress: this.fb.group({
      repName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      state: ['', Validators.required]
    }),

    items: new FormArray([ 
      // item: ['', Validators.required],
      // unit: ['', Validators.required],
      // rate: ['', Validators.required],
      // amount: ['', Validators.required]
      // new FormGroup({
      //   item: new FormControl(''),
      //   unit: new FormControl(''),
      //   rate: new FormControl('')

      // })

      new FormControl('')
    ]),

    clientName: ['', Validators.required],
    vehicleName: ['', Validators.required]

})

get InvoiceItem(){
  return this.AddNewInvoice.get('items') as FormArray;
}
  

 addNewInvoiceItem() {
   const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.InvoiceItem).push(control);
 }

 removeInvoiceItem(i: number){
    this.InvoiceItem.removeAt(i)
 }
   
 

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
    // console.log(this.AddNewInvoice.get())
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

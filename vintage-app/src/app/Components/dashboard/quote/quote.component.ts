import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  p: number = 1;
  postField = false;
  dataField = true;
  quotesList: any;
  postBtnData = ` New Quote`
  @ViewChild('code')
  code: 'td' = "td";
  postRow :boolean | any = false;
  showQuote = false;

  unit= '';rate = ''; item = '';vehicleName = '';clientName = '';vehicleId = '';clientId = '';
  totalAmount =''; amount = '';

  constructor(private service: AuthService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private matDialog: MatDialog) {
    this.service.QuoteList().subscribe(result => {
      this.quotesList = result;
      console.log(this.quotesList.payload);
   })

  }

  createItems():FormGroup{
    return this.fb.group({
      item: ['', Validators.required],
      unit: ['', Validators.required],
      rate: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }
  // getter for the item formArray
  get items(): FormArray{
    return <FormArray> this.AddNewQuote.get('items');
  }

  addItems() {
    this.items.push(this.createItems());
  }

  itemsHolder = this.createItems();

  AddNewQuote = this.fb.group(
    {
      vehicleId: ['', Validators.required],
      clientId: ['', Validators.required],
      clientName: ['', Validators.required],
      vehicleName: ['', Validators.required],
      totalAmount: ['', Validators.required],
      items:this.fb.array([this.itemsHolder], Validators.required)
    }

  );

   showPostField(){
    if(this.postField === false && this.dataField === true){
      this.postField = true
      this.dataField = false
      this.postBtnData = "Exit"
    } else{
      this.postField = false
      this.dataField = true
      this.postBtnData = "New Quote"
    }

    return this.postField;
  }

  addQuote() {
    this.service.AddNewQuote(this.AddNewQuote.value).subscribe(result => {
      console.log(result);
      this.toastr.success("New Quote Added Successfully")
    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  onCancel () {
    console.log('popup closed!');
    return this.postRow = false;
  }
  ngOnInit(): void {
  }

  displayQuote() {
    let dialogRef = this.matDialog.open(PopUpComponent,{
      data: {
        age: 1000,
        name: "King"
    }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    )
  }

  // displayQuote() {
  //  if(!this.showQuote) {
  //     this.showQuote = true;
  //  } else {
  //   this.showQuote = false;
  //  }
  //  return this.showQuote;
  // }
}


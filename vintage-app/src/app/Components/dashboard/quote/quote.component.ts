import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

  quotesList: any;

  constructor(private service: AuthService) {
    this.service.QuoteList().subscribe(result => {
      this.quotesList = result;
      console.log(this.quotesList.payload);
   })
  }

  ngOnInit(): void {
  }

}

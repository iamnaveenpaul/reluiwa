import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-aibooks',
  templateUrl: './aibooks.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class AibooksComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  addlead(fullName: string, emailId: string) {

    const obj = {
      fullName: fullName,
      emailId: emailId,
      type: 'aiForSales',
    };

    this.quoteService.saveLeadDetails(obj)
      .subscribe(res => console.log('after -', res));
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.html',
  styleUrls: []
})
export class GoogleVerifyComponent implements OnInit {
  constructor(private quoteService: QuoteService) { }
  ngOnInit() {
  }

}

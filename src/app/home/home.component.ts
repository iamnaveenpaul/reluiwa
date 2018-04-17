import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../footer/footer.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  cxoIsSelected = {
    'arrow_box_bottom': true,
    'orange-invert-btn': true
  };

  managerIsSelected = {
    'arrow_box_bottom': false,
    'orange-invert-btn': true
  };

  repIsSelected = {
    'arrow_box_bottom': false,
    'orange-invert-btn': true
  };

  openCxo() {
    this.cxoIsSelected.arrow_box_bottom = true;
    this.managerIsSelected.arrow_box_bottom = false;
    this.repIsSelected.arrow_box_bottom = false;
  }

  openManager() {
    this.managerIsSelected.arrow_box_bottom = true;
    this.cxoIsSelected.arrow_box_bottom = false;
    this.repIsSelected.arrow_box_bottom = false;
  }

  openRep() {
    this.repIsSelected.arrow_box_bottom = true;
    this.managerIsSelected.arrow_box_bottom = false;
    this.cxoIsSelected.arrow_box_bottom = false;
  }

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

}

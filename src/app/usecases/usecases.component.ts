import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { QuoteService } from '../home/quote.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ], declarations: [],
  providers: []
})

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class UsecasesComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  addlead(fullName: string, emailId: string) {

    const obj = {
      fullName: fullName,
      emailId: emailId,
      type: 'useCase',
    };

    this.quoteService.saveLeadDetails(obj)
      .subscribe(res => console.log('after -', res));
  }

  ngOnInit() {
  }

}

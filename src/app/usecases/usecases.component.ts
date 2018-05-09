import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { QuoteService } from '../home/quote.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ], declarations: [],
  providers: []
})

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class UsecasesComponent implements OnInit {

  @Input() fullName: string;
  @Input() emailId: string;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  submitDemoRequest() {
    const obj = {
      emailId: 'dev'
    };

    console.log(this.fullName)
    console.log(this.emailId)

    console.log(obj);

    // this.quoteService.saveLeadDetails({lead: obj})
    //   .subscribe(res => console.log('after -', res));
  }

}

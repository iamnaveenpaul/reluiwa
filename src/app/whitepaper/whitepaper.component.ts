import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class WhitepaperComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  demoRequestSent = false;
  nameErrorExist = false
  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  addlead(fullName: string, emailId: string) {
    this.nameErrorExist = false;
    this.errorMsg.errorExist = false
    if(fullName){
      const obj = {
        fullName: fullName,
        emailId: emailId,
        type: 'whitePaper',
      };

      var checkError = this.quoteService.checkValidEmailId(obj.emailId)
      if(checkError.pass){
        this.demoRequestSent = !this.demoRequestSent;
        this.quoteService.saveLeadDetails(obj)
          .subscribe(res => this.errorMsg.errorExist = false);
      } else {
        this.errorMsg = checkError
      }
    } else {
      this.nameErrorExist = true
    }
  }

  ngOnInit() {
  }

}

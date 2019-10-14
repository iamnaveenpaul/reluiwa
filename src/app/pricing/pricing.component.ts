import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-aibooks',
  templateUrl: './pricing.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  demoRequestSent = false;agreeTerms = false;
  showTerms = false;
  nameErrorExist = false;
  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  addlead(fullName: string, emailId: string,phoneNumber:string,website:string,designation:string) {
    this.nameErrorExist = false;
    if(this.agreeTerms){
      if(fullName && emailId && phoneNumber && website && designation){

        const obj = {
          fullName: fullName,
          emailId: emailId,
          type: 'pricing',
        };

        var checkError = this.quoteService.checkValidEmailId(obj.emailId)
        if(checkError.pass){
          this.demoRequestSent = !this.demoRequestSent;
          this.quoteService.saveLeadDetails(obj)
            .subscribe(res => window.location.href='/thank-you?fromDemo=false');
        } else {
          this.errorMsg = checkError
        }
      } else {
        alert("Please fill all fields to help us serve you better.")
      }
    }else {
      alert("Please agree to the terms to proceed")
    }
  }

  ngOnInit() {
  }

}

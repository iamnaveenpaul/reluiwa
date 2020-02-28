import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class WhitepaperComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  demoRequestSent = false;agreeTerms = false;
  showTerms = false;
  nameErrorExist = false
  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  addlead(fullName: string, emailId: string) {
    this.nameErrorExist = false;
    if(this.agreeTerms){ if(fullName){
      const obj = {
        fullName: fullName,title:this.title,
        emailId: emailId,
        type: 'whitePaper',
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
      this.nameErrorExist = true
    }
    }else {
      alert("Please agree to the terms to proceed")
    }
  }

  title:string = "";

  ngOnInit() {
    this.title = this.quoteService.getQueryParameter('type').replace(/[^a-zA-Z ]/g, " ")
    console.log(this.title);
  }

}

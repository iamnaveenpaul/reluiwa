import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "lodash";
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  demoRequestSent = false;
  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  submitDemoRequest(emailId: string) {

    const obj = {
      fullName: "",
      emailId: emailId,
      type: 'subscribe',
    };

    var checkError = this.quoteService.checkValidEmailId(obj.emailId)

    if(checkError.pass){

      this.demoRequestSent = !this.demoRequestSent;

      this.quoteService.saveLeadDetails(obj)
        .subscribe(res => window.location.href='/thank-you?fromDemo=true');
    } else {
      this.errorMsg = checkError
    }
  }

  canBedisplayed() {
    return !checkContains(window.location.href,"pricing")
      && !checkContains(window.location.href,"demo")
      && !checkContains(window.location.href,"use")
      && !checkContains(window.location.href,"case")
      && !checkContains(window.location.href,"white")
      && !checkContains(window.location.href,"sales-ai")
      && !checkContains(window.location.href,"google")
      && !checkContains(window.location.href,"product")
      && !checkContains(window.location.href,"thank-you")
  }

  ngOnInit() {
  }

}

function checkContains(string,substring) {
  return string.indexOf(substring) !== -1
}

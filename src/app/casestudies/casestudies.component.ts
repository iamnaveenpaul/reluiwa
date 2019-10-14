import { Component, OnInit } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class CasestudiesComponent implements OnInit {

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
    if (this.agreeTerms) {
      if (fullName) {

        const obj = {
          fullName: fullName,
          emailId: emailId,
          type: 'caseStudy',
        };

        var checkError = this.quoteService.checkValidEmailId(obj.emailId)
        if (checkError.pass) {
          this.demoRequestSent = !this.demoRequestSent;
          this.quoteService.saveLeadDetails(obj)
            .subscribe(res => window.location.href = '/thank-you?fromDemo=false');
        } else {
          this.errorMsg = checkError
        }
      } else {
        this.nameErrorExist = true
      }
    }
  }

  title:string = "";

  ngOnInit() {

    this.title = this.quoteService.getQueryParameter('type').replace(/[^a-zA-Z ]/g, " ")

    console.log(this.title);

  }

}

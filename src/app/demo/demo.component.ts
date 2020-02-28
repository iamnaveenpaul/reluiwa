import { Component, OnInit, NgModule } from '@angular/core';
import {QuoteService} from '@app/home/quote.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
@NgModule({
  imports: [
    FormsModule,
  ]
})
export class DemoComponent implements OnInit {

  demoRequestSent = false;
  agreeTerms = false;
  showTerms = false;
  nameErrorExist = false;

  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  constructor(private quoteService: QuoteService) { }

  addlead(fullName: string, emailId: string,phoneNumber:string,website:string,designation:string) {
    this.nameErrorExist = false;

    if(this.agreeTerms){
      if(fullName && emailId && phoneNumber && website && designation){
        const obj = {
          fullName: fullName,
          emailId: emailId,
          phoneNumber: phoneNumber,
          designation: designation,
          website: website,
          type: 'requestForDemo',
        };

        var checkError = this.quoteService.checkValidEmailId(obj.emailId)
        if(checkError.pass){
          this.demoRequestSent = !this.demoRequestSent;
          this.quoteService.saveLeadDetails(obj)
            .subscribe(res =>
              window.location.href='/thank-you?fromDemo=true'
            );
        } else {
          this.errorMsg = checkError
        }
      } else {
        // this.nameErrorExist = true
        alert("Please fill all fields to help us serve you better.")
      }
    } else {
      alert("Please agree to the terms to proceed")
    }

  }

  ngOnInit() {

  }

}

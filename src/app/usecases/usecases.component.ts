import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { QuoteService } from '../home/quote.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

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
        fullName: fullName,
        emailId: emailId,
        type: 'useCase',
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

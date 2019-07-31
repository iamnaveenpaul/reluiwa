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
  ],

})
export class DemoComponent implements OnInit {

  demoRequestSent = false;
  nameErrorExist = false;
  agreeTerms = false;

  errorMsg = {
    pass:true,errorExist:false
  };

  closeError() {
    this.errorMsg.pass = true
  }

  constructor(private quoteService: QuoteService) { }

  addlead(fullName: string, emailId: string) {
    this.nameErrorExist = false;

    console.log(this.agreeTerms);

    if(fullName){

      const obj = {
        fullName: fullName,
        emailId: emailId,
        type: 'requestForDemo',
      };

      var checkError = this.quoteService.checkValidEmailId(obj.emailId)
      if(checkError.pass){
        this.demoRequestSent = !this.demoRequestSent;
        this.quoteService.saveLeadDetails(obj)
          .subscribe(res =>
            window.location.href='/thank-you?fromDemo=false'
          );
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

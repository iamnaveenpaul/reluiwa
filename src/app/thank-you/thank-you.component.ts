import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {QuoteService} from '@app/home/quote.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['../demo/demo.component.scss','./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private quoteService: QuoteService,private cookieService: CookieService) { }

  fromDemo = false;

  sendMoreDetails(emailId: string,fullName: string,
  company: string,designation: string,
  salesTeamSize: string,currentCRM: string,
  location: string,phoneNumber: string,
  challenges: string){

    console.log(emailId,fullName,company,designation,salesTeamSize,currentCRM,location,phoneNumber,challenges);

    this
      .quoteService
      .saveMoreDetails({
        emailId: emailId,
        fullName: fullName,
        company: company,
        designation: designation,
        salesTeamSize: salesTeamSize,
        currentCRM: currentCRM,
        location: location,
        phoneNumber: phoneNumber,
        challenges: challenges
      })
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
    if(getQueryStringValue("fromDemo") == "true"){
      this.fromDemo = true;
    }

    var userObjStr = this.cookieService.get('emailId');
    var userObj = {
      emailId: "",
      fullName: ""
    }
    try {
      userObj = JSON.parse(userObjStr);
    } catch(er){
      console.log(er)
    }

    if(userObj && userObj.emailId){
      setEmailIdAndName(userObj.emailId, userObj.fullName);
    }

  }

}

function getQueryStringValue (key) {
  return decodeURIComponent(
    window.location.search.replace(new RegExp("^(?:.*[&\\?]" +
      encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}


function setEmailIdAndName(emailId,fullName){
  console.log(emailId);
  console.log($);
  $("#emailId").val(emailId);
  $("#fullName").val(fullName);
}

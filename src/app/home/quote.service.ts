import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import * as _ from "lodash";

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
  leadsSave: 'leads/download/ebook'
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

export interface LeadContext {
  lead: object;
}

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.quote(context))
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  saveLeadDetails (lead: Object): Observable<object> {
    return this.httpClient
      .post(routes.leadsSave, lead);
  };

  checkValidEmailId (emailId: String) {

    if(fetchCompanyFromEmail(emailId)){
      return {
        errorExist:false,
        pass:true,
        message: 'Relatas is built for successful sales teams. Please enter your business email id or mail us at hello@relatas.com'
      }
    } else {
      return {
        errorExist:true,
        pass:false,
        message: 'Relatas is built for successful sales teams. Please enter your business email id or mail us at hello@relatas.com'
      }
    }
  }
}

function fetchCompanyFromEmail(email) {

  if (checkRequired(email) && validateEmail(email)) {

    var domain = email.substring(email.lastIndexOf("@") + 1)
      , words = domain.split(".")
      , personalMailDomains = ["gmail", "yahoo", "hotmail", "outlook", "aol", "rediffmail", "live"]
      , removableTextList = ["com", "org", "edu", "in"]

    _.remove(words, function (word: string) {
      word = word.toLowerCase();
      return removableTextList.indexOf(word) > -1
    })
    words = _.sortBy(words, function (word) {
      return -(word.length);
    })
    return (personalMailDomains.indexOf(words[0]) > -1) ? null : (words[0])
  } else {
    return null
  }
}

function checkRequired(data){
  if (data == '' || data == null || data == undefined || data == "undefined") {
    return false;
  }
  else{
    return true;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

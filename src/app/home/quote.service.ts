import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

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

  saveLeadDetails (lead: LeadContext): Observable<object> {
    return this.httpClient
      .post(routes.leadsSave, lead);
  }

}

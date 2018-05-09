import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EbookService {

  constructor(private http: HttpClient) {}

  registerAndDownloadEbook() {
    return this.http.get('https://api.github.com/users');
  }
}

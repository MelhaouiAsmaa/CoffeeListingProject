import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../store/coffee';

// tslint:disable-next-line: max-line-length
// const corsHeaders = new HttpHeaders({
//   'Content-Type': 'application/json',
//   Accept: 'application/json', 'Access-Control-Allow-Origin': 'https://random-data-api.com/api/coffee/random_coffee'
// });
@Injectable({
  providedIn: 'root',
})

export class CoffeeService {
  private baseUrl = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) { }

  getCoffeeListWithParams(params: any): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseUrl, { params });
  }
  getCoffeeList() {
    return this.http.get<Coffee[]>(this.baseUrl + '?size=50');
  }

  get() {
    return this.http.get<Coffee[]>(this.baseUrl);
  }

  getCoffee(id: any): Observable<Coffee> {
    return this.http.get<Coffee>(this.baseUrl + '?id=' + id);
  }
}
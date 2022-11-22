import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}

  private url = `https://random-data-api.com/api/coffee/random_coffee?size=50`;

  getCoffee(): Observable<ReadonlyArray<Coffee>> {
    return this.http.get<ReadonlyArray<Coffee>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}

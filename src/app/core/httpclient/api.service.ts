import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<I>(endpoint, options?): Observable<HttpEvent<I>> {
    options['withCredentials'] = true;
    options['observe'] = 'body';
    // options['crossDomain'] = true;
    return this.http
      .get<I>(endpoint ? endpoint : environment?.endpoint, options)
      .pipe(
        catchError((error) => {
          return of(error.error);
        })
      );
  }
}

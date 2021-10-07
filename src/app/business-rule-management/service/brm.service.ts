import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/core/httpclient/api.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BrmService {
  constructor(private apiService: ApiService) {}

  getOperators() {
    const path = '/sys-entities/operators';
    return this.apiService.get<any>(`${environment.endpoint}${path}`, {
      headers: { requestid: Date.now() + '' },
    });
  }
}

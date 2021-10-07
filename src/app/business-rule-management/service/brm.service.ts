import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/httpclient/api.service';
import { environment } from 'src/environments/environment';

interface IOperator {
  code: string;
  message: string;
  data: any;
}

@Injectable()
export class BrmService {
  constructor(private apiService: ApiService) {}

  getOperators(): Observable<HttpEvent<IOperator>> {
    const path = '/sys-entities/operators';
    return this.apiService.get<IOperator>(`${environment.endpoint}${path}`, {
      headers: { requestid: Date.now() + '' },
    });
  }
}

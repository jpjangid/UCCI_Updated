import { Injectable } from '@angular/core';
import { HTTPApi } from './httpapi.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscalationMatrixMasterService {

  constructor(public http: HTTPApi) { }

  // create mtrix form api
  createMatrixForm(data:any) {
    return this.http.post('createMatrix', data);
  }
}

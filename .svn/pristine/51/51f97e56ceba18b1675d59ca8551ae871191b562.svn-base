import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class FeesMasterService {

  constructor(private http: HTTPApi) { }

  /************** Insert Member Categories Method ***********/

  insertFeesMaster(fee: any): Observable<any> {
    
    return this.http.post('fee',fee);
  }

  /************** Get Member Categories Method ***********/

  getFeesMaster(): Observable<any> {
    return this.http.get('fee');
  }
  /************** Edit Member Categories Method ***********/

  editFeesMaster(
    fee: any,
    id: number
  ): Observable<any> {

    return this.http.put(`fee/${id}`, fee);
  }

  /************** Delete Member Categories Method ***********/

  deleteFeesMaster(id: number): Observable<any> {
    return this.http.delete(`fee/${id}`);
  }
}

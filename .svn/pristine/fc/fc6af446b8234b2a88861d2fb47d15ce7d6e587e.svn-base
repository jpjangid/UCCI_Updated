import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root',
})
export class TurnoverMasterService {
  constructor(private http: HTTPApi) {}
  /************** Insert Member Categories Method ***********/

  insertTurnoverMaster(data: any): Observable<any> {

    return this.http.post('turnover', data);
  }

  /************** Get Member Categories Method ***********/

  getTurnoverMaster(): Observable<any> {
    return this.http.get('turnover');
  }

  /************** Edit Member Categories Method ***********/

  editTurnoverMaster(
    data: any,
    id: number
  ): Observable<any> {

    return this.http.put(`turnover/${id}`, data);
  }

  /************** Delete Member Categories Method ***********/

  deleteTurnoverMaster(id: number): Observable<any> {
    return this.http.delete(`turnover/${id}`);
  }
}

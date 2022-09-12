import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class MembershipTypeMasterService {

  constructor(private http: HTTPApi) { }
  /************** Insert Member Categories Method ***********/

  insertMembershipTypeMaster(mbershipType: any): Observable<any> {
    
    return this.http.post('membership-type', mbershipType);
  }

  /************** Get Member Categories Method ***********/

  getMembershipTypeMaster(): Observable<any> {
    return this.http.get('membership-type');
  }
  /************** Edit Member Categories Method ***********/

  editMembershipTypeMaster(
    mbershipType: any,
    id: number
  ): Observable<any> {

    return this.http.put(`membership-type/${id}`, mbershipType);
  }

  /************** Delete Member Categories Method ***********/

  deleteMembershipTypeMaster(id: number): Observable<any> {
    return this.http.delete(`membership-type/${id}`);
  }

}

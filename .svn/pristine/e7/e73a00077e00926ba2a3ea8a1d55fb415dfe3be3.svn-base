import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class MemberClassificationMasterService {

  constructor(private http: HTTPApi) { }

  /************** Insert Member Categories Method ***********/

  insertMemberClassificationMaster(memberClassification: any): Observable<any> {
    
    return this.http.post('member-classification',memberClassification);
  }

  /************** Get Member Categories Method ***********/

  getMemberClassificationMaster(): Observable<any> {
    return this.http.get('member-classification');
  }
  /************** Edit Member Categories Method ***********/

  editMemberClassificationMaser(
    memberClassification: any,
    id: number
  ): Observable<any> {

    return this.http.put(`member-classification/${id}`, memberClassification);
  }

  /************** Delete Member Categories Method ***********/

  deleteMemberClassificationMaser(id: number): Observable<any> {
    return this.http.delete(`member-classification/${id}`);
  }

}

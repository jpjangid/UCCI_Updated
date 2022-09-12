import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root',
})
export class MemberCategoriesMasterService {
  constructor(private http: HTTPApi) {}

  /************** Insert Member Categories Method ***********/

  insertMemberCategoriesMaster(memberCategories: any): Observable<any> {

    return this.http.post('member-category', memberCategories);
  }

  /************** Get Member Categories Method ***********/

  getMemberCategoriesMaster(): Observable<any> {
    return this.http.get('member-category');
  }

  /************** Edit Member Categories Method ***********/

  editMemberCategoriesMaser(
    memberCategories: any,
    id: number
  ): Observable<any> {

    return this.http.put(`member-category/${id}`,memberCategories);
  }

  /************** Delete Member Categories Method ***********/

  deleteMemberCategoriesMaser(id: number): Observable<any> {
    return this.http.delete(`member-category/${id}`);
  }
}

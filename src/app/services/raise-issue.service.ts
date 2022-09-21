import { Injectable } from '@angular/core';
import { HTTPApi } from './httpapi.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseIssueService {

  constructor(public http: HTTPApi) { }
  // get all issue types dropdown
  getIssues() {
    return this.http.get('getIssueTypes');
  }
  // raise issue form
  raiseIssueForm(formdata: any) {
    return this.http.post('createIssue', formdata);
  }
  // create issue type
  createIssueType() {
    return this.http.post('createIssueTypes');
  }
  // get issue type
  getRaiseIssues() {
    return this.http.get('getRaisedIssues');
  }
  // update actions raise issue
  // updateStatus(id?: any, data?: any) {
  //   return this.http.post('updateStatus/', + id, data)
  // }
}

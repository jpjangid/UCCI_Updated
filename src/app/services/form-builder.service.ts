import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor( private http:HTTPApi) { }

  //to get all custom forms 
  getCustomFormsList() : Observable<any> {
    return this.http.get('form');
  }
  //to delete custom form from from list
  deleteCustomForm(id:any) : Observable<any> {
    return this.http.delete('form/'+id);
  }
  //to create custom form
  createCustomForm(formData:any): Observable<any> {
    return this.http.post('form',formData)
  }
  //to edit custom form
  editCustomForm(id?:any,formData?:any): Observable<any> {
    return this.http.put('form/'+id,formData)
  }
  //to get form by slug
  getCustomFormBySlug(slug?:any) :Observable<any> {
    return this.http.get('form/'+slug)
  }
}

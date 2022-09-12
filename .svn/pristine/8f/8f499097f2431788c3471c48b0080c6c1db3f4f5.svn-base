import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPApi {

   //token: any = JSON.parse(localStorage.getItem('access_token'));
  //token: any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VjY2kuYnJhbmR0YWxrcy5pbi9hcGkvbG9naW4iLCJpYXQiOjE2NjE2MDMxMjgsImV4cCI6MTY2MTYwNjcyOCwibmJmIjoxNjYxNjAzMTI4LCJqdGkiOiJLNDFOWmk5S3lkRGN3N2d3Iiwic3ViIjoiNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.VifmvLdnj306ZGNQWiwxCk2Kj9NIi0GozOS_-12ZKMY';


  // headers: any = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${this.token?.acces_token}`,
  // });

  // headersFormData: any = new HttpHeaders({
  //   // 'Content-Type': 'multipart/form-data',
  //   Authorization: `Bearer ${this.token?.acces_token}`
  // });
  // requestOptions = { headers: this.headers };
  // requestOptionsFormData = { headers: this.headersFormData }
  public _baseurl = environment.api_baseurl;

  constructor(public http: HttpClient) {
    // console.log(this.token);

  }

  //Get 
  get(endPoint: any) {
    return this.http.get(`${this._baseurl}/${endPoint}`);
  }

  //Post 
  post(endPoint: any, model?: any) {
    return this.http.post(`${this._baseurl}/${endPoint}`, model);
  }

  //Post 
  put(endPoint: any, model?: any) {
    return this.http.put(`${this._baseurl}/${endPoint}`, model);
  }


  //Delete 
  delete(endPoint: any) {
    return this.http.delete(`${this._baseurl}/${endPoint}`);
  }


  //Post with form data 
  postWithFormData(endPoint: any, formData) {
    return this.http.post(`${this._baseurl}/${endPoint}`, formData);
  }
}

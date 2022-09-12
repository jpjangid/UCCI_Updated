import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HTTPApi) {

  }
  // **********************************************Authentication API's *****************************************
  // user register api
  register(data: any): Observable<any> {
    return this.http.post('register', data);
  }
  // user login api
  login(url: any): Observable<any> {
    return this.http.post('login', url);
  }
  // logout user api
  logoutUser() {
    return this.http.post('logout');
  }

  // refresh token api
  refreshTOken() {
    return this.http.post('refresh');
  }


  // *******************************************************Services API's***************************************
  // ___________________________________________________________DOCUMENT ATTESTATION_________________________________________________________________

  // add document attestation service form api
  addDocumentAttestation(formData: any) {
    return this.http.post('addDocument', formData);
  }
  // get document attestation list 
  getDocumentAttestationList() {
    return this.http.get('getDocument');
  }
  // verify document attestation
  verifyDocumentAttestation(token: any, id: any): Observable<any> {
    return this.http.put('verifyingDoc/' + token + '/' + id)
  }
  // pay for document attestation
  payDocumentAttestationFee(token: any, id: any) {
    return this.http.post('payDoc/' + token + '/' + id)
  }

  // ________________________________________________________________CERTIFICATE OF ORIGIN __________________________________________________
  // add certificate of origin service
  addCertificateOfOrigin(data: any): Observable<any> {
    return this.http.post('addCoo', data);
  }
  // get certificate of origin member list
  getCertificateofOriginList() {
    return this.http.get('getCoo');
  }
  // verify certificate of origin member
  verifycertificate(id: any): Observable<any> {
    return this.http.put('verifyingCoo/' + id);
  }
  // payment api for certificate of origin
  paymentCertificateOrigin(paytoken: any) {
    return this.http.post('payCoo', paytoken)
  }

  // ***********************************************call members API's ************************************
  // get member list of contact api
  getMemberList() {
    return this.http.get('call-member')
  }
  // filter list finction 
  getAllFilters(name: any, id: any) {
    return this.http.get('filter/' + name + '/' + id)
  }
  // side filter list data
  getSideFilterCategory() {
    return this.http.get('call-member/filter-list');
  }

  // create new filter 
  createNewFilter(data:any) {
    return this.http.post('call-member/filter',data);
  }
  // ********************************************All Members API's******************************************************
  // member turnover dropdown api
  getTurnoverData() {
    return this.http.get('turnover')
  }
  // member nationality dropdown values
  getNationalityDropdownValue() {
    let dropdownValue : any = {data:[{value:"Indian"},{value:"NRI"},{value:"Non Indian"}]}
    return dropdownValue;
  }
  // member payment modes dropdown values
  getpaymentModesDropdownValue() {
    let dropdownValue : any = {data:[{value:"Cheque"},{value:"Cash"},{value:"DD"},{value:"NEFT/RTGS"}]}
    return dropdownValue;
  }
  // member Gst Type dropdown values
  getGstTypesDropdownValue() {
    let dropdownValue : any = {data:[{value:"Regular"},{value:"Registered"},{value:"Composition"}]}
    return dropdownValue;
  }
  // member payment modes dropdown values
  getExportTypesDropdownValue() {
    let dropdownValue : any = {data:[{value:"Manufacturer/Trader"},{value:"Nature of Export Goods"}]}
    return dropdownValue;
  }
  // member payment modes dropdown values
  getPartyTypesDropdownValue() {
    let dropdownValue : any = {data:[{value:"Not Applicable"},{value:"Deemed Export"},{value:"Embassy/UN Body"},{value:"SEZ"}]}
    return dropdownValue;
  }
  // member classfication dropdown api
  getMemberClassfication() {
    return this.http.get('member-classification')
  }
  // member category dropdown api
  getMemberCategory() {
    return this.http.get('member-category')
  }
  // regular member api
  regularMemberRegister(data: any): Observable<any> {
    return this.http.post('regular-members', data);
  }
  // get regular member list
  getregularMemberList() {
    return this.http.get('regular-members');
  }

  //HWM membership registration
  hwmRegistration(formData:any) {
    return this.http.post('hwm',formData);
  }
  // get hwm member list
  getHwmMemberList() {
    return this.http.get('hwm');
  }
  // approve and reject hwm member
  hwmMemberApproval(id?:any) {
    return this.http.get('hwm/approval/'+id);
  }
  //registration for non member exporter
  registrationForNonMember(formData:any) {
    return this.http.post('non-member-exporter',formData);
  }
  // get non member exporter list
  getNonMemberList() {
    return this.http.get('non-member-exporter');
  }
  //approve and reject api for non member exporter
  nonMemberApproval(id?:any) {
    return this.http.post('non-member-exporter/approval/'+id);
  }
}
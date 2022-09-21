import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HTTPApi) {

  }
  // **********************************************Authentication API's *****************************************
  // user register api
  register(data: any):Observable<any> {
    return this.http.post('register', data);
  }
  // user login api
  login(data: any):Observable<any> {
    console.log("data : ", data);
    
    return this.http.post('login', data);
  }
  // logout user api
  logoutUser():Observable<any> {
    return this.http.post('logout');
  }

  // refresh token api
  refreshTOken(): Observable<any> {
    return this.http.post('refresh');
  }


  // *******************************************************Services API's***************************************
  // ___________________________________________________________DOCUMENT ATTESTATION_________________________________________________________________

  // add document attestation service form api
  addDocumentAttestation(formData: any): Observable<any> {
    return this.http.post('addDocument', formData);
  }
  // get document attestation list 
  getDocumentAttestationList(): Observable<any> {
    return this.http.get('getDocument');
  }
  // verify document attestation
  verifyDocumentAttestation(id?: any, data?: any): Observable<any> {
    return this.http.post('verifyingDoc/' + id, data)
  }
  // pay for document attestation
  payDocumentAttestationFee(token: any, id: any): Observable<any> {
    return this.http.post('payDoc/' + token + '/' + id)
  }

  // ________________________________________________________________CERTIFICATE OF ORIGIN __________________________________________________
  // add certificate of origin service
  addCertificateOfOrigin(data: any): Observable<any> {
    return this.http.post('addCoo', data);
  }
  // get certificate of origin member list
  getCertificateofOriginList(): Observable<any> {
    return this.http.get('getCoo');
  }
  // verify certificate of origin member
  verifycertificate(id: any): Observable<any> {
    return this.http.put('verifyingCoo/' + id);
  }
  // payment api for certificate of origin
  paymentCertificateOrigin(paytoken: any): Observable<any> {
    return this.http.post('payCoo', paytoken)
  }

  // **********************************************************call members API's ************************************************************
  // get member list of contact api
  getMemberList(): Observable<any> {
    return this.http.get('call-member')
  }
  // filter list finction 
  getAllFilters(name: any, id: any): Observable<any> {
    return this.http.get('filter/' + name + '/' + id)
  }
  // side filter list data
  getSideFilterCategory(): Observable<any> {
    return this.http.get('call-member/filter-list');
  }

  // create new filter 
  createNewFilter(data: any): Observable<any> {
    return this.http.post('call-member/filter', data);
  }

  getCallStatus(): Observable<any> {
    return this.http.get('log-status');
  }

  // *********************************************************Members Call Logs API's******************************************************
  getAllLogs(id?: any): Observable<any> {
    return this.http.get('call-member/logs/' + id);
  }
  addNewCallLogApi(data: any): Observable<any> {
    return this.http.post('call-member/logs', data)
  }
  editCallLog(id?: any, data?: any) : Observable<any>{
    return this.http.put('call-member/logs/' + id, data)
  }

  // *****************************************************************All Members API's******************************************************
  // member turnover dropdown api
  getTurnoverData() : Observable<any>{
    return this.http.get('turnover')
  }
  // member nationality dropdown values
  getNationalityDropdownValue() : Observable<any>{
    let dropdownValue: any = { data: [{ value: "Indian" }, { value: "NRI" }, { value: "Non Indian" }] }
    return dropdownValue;
  }
  // member payment modes dropdown values
  getpaymentModesDropdownValue() : Observable<any>{
    let dropdownValue: any = { data: [{ value: "Cheque" }, { value: "Cash" }, { value: "DD" }, { value: "NEFT/RTGS" }] }
    return dropdownValue;
  }
  // member Gst Type dropdown values
  getGstTypesDropdownValue() : Observable<any>{
    let dropdownValue: any = { data: [{ value: "Regular" }, { value: "Registered" }, { value: "Composition" }] }
    return dropdownValue;
  }
  // member payment modes dropdown values
  getExportTypesDropdownValue() : Observable<any>{
    let dropdownValue: any = { data: [{ value: "Manufacturer/Trader" }, { value: "Nature of Export Goods" }] }
    return dropdownValue;
  }
  // member payment modes dropdown values
  getPartyTypesDropdownValue() : Observable<any>{
    let dropdownValue: any = { data: [{ value: "Not Applicable" }, { value: "Deemed Export" }, { value: "Embassy/UN Body" }, { value: "SEZ" }] }
    return dropdownValue;
  }
  // member classfication dropdown api
  getMemberClassfication() : Observable<any>{
    return this.http.get('member-classification')
  }
  // member category dropdown api
  getMemberCategory() : Observable<any>{
    return this.http.get('member-category')
  }
  // regular member api
  regularMemberRegister(data: any): Observable<any> {
    return this.http.post('regular-members', data);
  }
  // get regular member list
  getregularMemberList(): Observable<any> {
    return this.http.get('regular-members');
  }

  // ********************************************Visa Service API's ******************************************************

  // post Service Details

  postVisaServiceDetails(data: any): Observable<any> {
    return this.http.post('addVisaRecommendation', data);
  }

  // Visa Payment 

  postVisaPayment(token: any, id: any): Observable<any> {
    return this.http.post(`payVisa/${token}/${id}`);
  }

  // Upload Documents

  postDocuments(token: any, id: any, modal: any): Observable<any> {
    return this.http.post(`uploadVisaDocs/${token}/${id}`, modal);
  }

  // Get All data for visa  approval

  getVisaApprovalData(): Observable<any> {
    return this.http.get('getVisaRecommendation');
  }

  // Approve or Reject visa request

  visaConfirmation(id: any, modal: any): Observable<any> {
    debugger;
    return this.http.post(`approveRejectVisa/${id}`, modal)
  }

  //HWM membership registration
  hwmRegistration(formData: any): Observable<any> {
    return this.http.post('hwm', formData);
  }
  // get hwm member list
  getHwmMemberList() : Observable<any>{
    return this.http.get('hwm');
  }
  // approve and reject hwm member
  hwmMemberApproval(id?: any): Observable<any> {
    return this.http.get('hwm/approval/' + id);
  }
  //registration for non member exporter
  registrationForNonMember(formData: any): Observable<any> {
    return this.http.post('non-member-exporter', formData);
  }
  // get non member exporter list
  getNonMemberList() : Observable<any>{
    return this.http.get('non-member-exporter');
  }
  //approve and reject api for non member exporter
  nonMemberApproval(id?: any): Observable<any> {
    return this.http.post('non-member-exporter/approval/' + id);
  }
}
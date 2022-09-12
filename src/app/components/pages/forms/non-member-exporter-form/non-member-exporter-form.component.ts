import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-non-member-exporter-form',
  templateUrl: './non-member-exporter-form.component.html',
  styleUrls: ['./non-member-exporter-form.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NonMemberExporterFormComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private messageService: MessageService
  ) {}
  nonMemberFormData: any = {};
  turnoverData: any = {};
  nationalities: any = {};
  paymentModes: any = {};
  gstTypes: any = {};
  exportTypes: any = {};
  partyTypes: any = {};
  selectedFile: File;
  ngOnInit(): void {
    this.nationalities = this.apiservice.getNationalityDropdownValue();

    this.paymentModes = this.apiservice.getpaymentModesDropdownValue();

    this.gstTypes = this.apiservice.getGstTypesDropdownValue();

    this.exportTypes = this.apiservice.getExportTypesDropdownValue();

    this.partyTypes = this.apiservice.getPartyTypesDropdownValue();

    this.apiservice.getTurnoverData().subscribe((res: any) => {
      this.turnoverData = res;
      console.log(this.turnoverData, res);
    });
    console.log(this.nationalities.data);
  }
  //register function for non member exporter
  Register(form?: any) {
    let formData = new FormData();

    let dob1filterDate = moment(this.nonMemberFormData.date_of_birth1).format(
      'YYYY/MM/DD'
    );

    this.nonMemberFormData.date_of_birth1 = dob1filterDate;

    let pay_method_date = moment(this.nonMemberFormData.pay_method_date).format(
      'YYYY/MM/DD'
    );

    this.nonMemberFormData.pay_method_date = pay_method_date;

    // if(form.valid) {
    let data = this.nonMemberFormData;
    console.log(this.nonMemberFormData);

    for (const [key, value] of Object.entries(this.nonMemberFormData)) {
      console.log(`${key}: ${value}`);
      if(`${key}` != 'profile1') {
        formData.append(`${key}`, `${value}`);
      }
      else {
        formData.append(`${key}`, this.selectedFile);
      }
      if (`${key}` == 'Cheque' || `${key}` == 'DD') {
        formData.append(`${key}`, `${value}`);
      }
    }
    this.apiservice.registrationForNonMember(formData).subscribe(
      (res: any) => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'danger',
          summary: 'Error',
          detail: error?.error,
        });
      }
    );
    // }
  }
  //upload photo
  fileUpload(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

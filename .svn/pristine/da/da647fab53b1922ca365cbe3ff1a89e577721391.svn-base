import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hwm-form',
  templateUrl: './hwm-form.component.html',
  styleUrls: ['./hwm-form.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class HWMFormComponent implements OnInit {
  hwmMemberShipFormData: any = { product_details: [{}], waste_details: [{}] };
  hwmDocuments: any = {};
  productDetails: any = [];
  member_classification: any = {};
  selectedFile: File;
  turnoverData: any = {};
  categoryData: any = {};

  constructor(
    private apiservice: ApiService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.apiservice.getTurnoverData().subscribe((res: any) => {
      this.turnoverData = res;
      console.log(this.turnoverData, res);
    });
    this.apiservice.getMemberClassfication().subscribe((res: any) => {
      this.member_classification = res;
      console.log(this.member_classification, res);
    });
    this.apiservice.getMemberCategory().subscribe((res: any) => {
      this.categoryData = res;
      console.log(this.categoryData, res);
    });
  }

  //to register HWM membership candidate
  Register(form: NgForm) {
    console.log(form.value);
    let formData = new FormData();

    let dob1filterDate = moment(
      this.hwmMemberShipFormData.date_of_birth1
    ).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.date_of_birth1 = dob1filterDate;

    let dob2filterDate = moment(
      this.hwmMemberShipFormData.date_of_birth2
    ).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.date_of_birth2 = dob2filterDate;

    let wasteDisposalDate = moment(
      this.hwmMemberShipFormData.hw_disposal_expected_date
    ).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.hw_disposal_expected_date = wasteDisposalDate;

    let production_commencement_date = moment(
      this.hwmMemberShipFormData.production_commencement_date
    ).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.production_commencement_date =
      production_commencement_date;

    // if (form.valid) {
      console.log(this.hwmMemberShipFormData);
      let data = this.hwmMemberShipFormData;
      console.log(data);
      for (const [key, value] of Object.entries(this.hwmMemberShipFormData)) {
        console.log(key,value);
        if(!(key in this.hwmDocuments)) {
          formData.append(key, `${value}`);
        }
        // else  {
        //   for(const [doc_key,doc_value] of Object.entries(this.hwmDocuments) ) {
        //     console.log("hello testing",`${doc_key}`, `${doc_value}`,this.hwmDocuments)
        //     if(`${key}` == `${doc_key}`) {
        //       console.log(`${key}`,`${doc_value}`)
        //       formData.append(`${doc_key}`, `${doc_value}`);
        //     }
        //   }
        // }
      }
      formData.append('ec_document', this.hwmDocuments?.ec_document);
      formData.append('cte_document', this.hwmDocuments?.cte_document);
      formData.append('cto_document', this.hwmDocuments?.cto_document);
      formData.append('hwm_document', this.hwmDocuments?.hwm_document);
      formData.append('undertaking', this.hwmDocuments?.undertaking);
      formData.append('application', this.hwmDocuments?.application);
      formData.append('feesdocument1', this.hwmDocuments?.feesdocument1);
      formData.append('feesdocument2', this.hwmDocuments?.feesdocument2);
      formData.append('logo', this.hwmDocuments?.logo);
      formData.append('profile1', this.hwmDocuments?.profile1);
      formData.append('profile2', this.hwmDocuments?.profile2);
      formData.append('gst_certificate', this.hwmDocuments?.gst_certificate);
      formData.append('ca_certificate', this.hwmDocuments?.ca_certificate);
      this.apiservice.hwmRegistration(formData).subscribe(
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

  //to remove one row to product detail
  removeProductDetailRow(index?: any, string?: any) {
    if (string == 'product') {
      if (this.hwmMemberShipFormData.product_details?.length > 1) {
        this.hwmMemberShipFormData.product_details.splice(index, 1);
      }
    } else {
      if (this.hwmMemberShipFormData.waste_details?.length > 1) {
        this.hwmMemberShipFormData.waste_details.splice(index, 1);
      }
    }
  }

  //to add one row to product detail
  addProductDetailRow(string?: any) {
    if (string == 'product') {
      this.hwmMemberShipFormData.product_details.push({});
    } else {
      this.hwmMemberShipFormData.waste_details.push({});
    }
  }

  //upload files as binary
  fileUpload(event: any, string: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    if (string == 'logo') {
      this.hwmDocuments.logo = this.selectedFile;
    } else if (string == 'profile1') {
      this.hwmDocuments.profile1 = this.selectedFile;
    } else if (string == 'profile2') {
      this.hwmDocuments.profile2 = this.selectedFile;
    } else if (string == 'gst_certificate') {
      this.hwmDocuments.gst_certificate = this.selectedFile;
    } else if (string == 'ca_certificate') {
      this.hwmDocuments.ca_certificate = this.selectedFile;
    } else if (string == 'ec_document') {
      this.hwmDocuments.ec_document = this.selectedFile;
    } else if (string == 'cte_document') {
      this.hwmDocuments.cte_document = this.selectedFile;
    } else if (string == 'cto_document') {
      this.hwmDocuments.cto_document = this.selectedFile;
    } else if (string == 'hwm_document') {
      this.hwmDocuments.hwm_document = this.selectedFile;
    } else if (string == 'undertaking') {
      this.hwmDocuments.undertaking = this.selectedFile;
    } else if (string == 'application') {
      this.hwmDocuments.application = this.selectedFile;
    } else if (string == 'feesdocument1') {
      this.hwmDocuments.feesdocument1 = this.selectedFile;
    } else if (string == 'feesdocument2') {
      this.hwmDocuments.feesdocument2 = this.selectedFile;
    }
    console.log(this.selectedFile);
  }
}

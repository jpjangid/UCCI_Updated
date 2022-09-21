import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
  SortEvent,
} from 'primeng/api';
import { Table } from 'primeng/table';
import { map } from 'rxjs/operators';
import { CommonClass } from 'src/app/common';
import { __values } from 'tslib';
import { FacilityBookingService } from '../../../../services/facility-booking.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ApprovalComponent implements OnInit {
  breadcrumb: any[] = [
    {
      title: 'Facilities Approval',
      subTitle: 'Masters',
    },
  ];

  @ViewChild('dt1') dt1: Table;
  fetchedData: any[] = [];

  loading: boolean = true;

  toggleState: boolean = false;

  selectedPlaceData: any;

  selectedFacilityData: any = [];

  bookedFacilities: any = [];

  visibleSidebar: any;

  facilitiesDropdown: any;

  localStorage:any;

  approveForm = this.fb.group({
    status: ['', Validators.required],
  });

  constructor(
    private FacilityBookingService: FacilityBookingService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonFunction : CommonClass
  ) {}

  ngOnInit(): void {
    this.localStorage = this.commonFunction.getLocalStorage();
    this.getData();
    // var access_token = localStorage.getItem('access_token');
    // console.log("access_token", access_token);
  }

  getData() {
    this.FacilityBookingService.getFacilityData().subscribe((res) => {
      console.log('response ', res);
      this.loading = false;

      for (var i = 0; i < res.facilities.length; i++) {
        this.bookedFacilities.push(...res.facilities[i].bookfacility);
      }
      this.facilitiesDropdown = res.facilities;

      this.dt1.reset();
    });
  }

  onAprrovPress(data: any) {
    this.approveForm.patchValue({ status: 'approve' });
    this.FacilityBookingService.putApproval(
      data.id,
      this.approveForm.value
    ).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Facility Approved successfully!',
      });
      console.log(res);
    });
  }

  onRejectPress(data: any) {
    this.approveForm.value.status = 'reject';
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });

        this.FacilityBookingService.putApproval(
          data.id,
          this.approveForm.value
        ).subscribe((res) => {
          console.log(res);
        });
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
    
    
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      return event.order * result;
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
}

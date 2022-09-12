import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
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

  fetchedData: any[] = [];

  loading: boolean = true;

  toggleState: boolean = false;

  selectedPlaceData: any;

  selectedFacilityData: any = [];

  bookedFacilities: any = [];

  constructor(
    private FacilityBookingService: FacilityBookingService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
    // var access_token = localStorage.getItem('access_token');
    // console.log("access_token", access_token);
  }

  getData() {
    this.FacilityBookingService.getFacilityData().subscribe((res) => {
      console.log('response ', res);

      this.fetchedData = res.facilities;
      res.facilities.forEach((value) => {
        this.bookedFacilities.push(value.bookfacility);
      });
      console.log('Data ', this.bookedFacilities);

      console.log('fetched data : ', this.fetchedData);

      this.loading = false;
    });
  }

  viewPlaceData(data: any, target: HTMLElement) {
    if (data) {
      this.selectedFacilityData = [];
      data.bookfacility.forEach((value) => {
        var d = moment(value.booking_date).format('DD/MM/YYYY');
        console.log('formated date :', d);
        value.booking_date = d;

        console.log(value);
        this.selectedFacilityData.push(value);
      });
      this.toggleState = true;

      this.selectedFacilityData = data;
    }
    console.log('Clicked data : ', this.selectedPlaceData);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    window.scrollTo(0, 600);
  }
}

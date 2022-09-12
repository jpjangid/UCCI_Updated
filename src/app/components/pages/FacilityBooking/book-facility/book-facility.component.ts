import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FacilityBookingService } from 'src/app/services/facility-booking.service';
import * as moment from 'moment';

@Component({
  selector: 'app-book-facility',
  templateUrl: './book-facility.component.html',
  styleUrls: ['./book-facility.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class BookFacilityComponent implements OnInit {
  bookedData: any[];
  selectedPlaceData: any;
  constructor(
    
    private FacilityBookingService: FacilityBookingService
  ) {}

  

  breadcrumb: any[] = [
    {
      title: 'Facility Booking',
    },
  ];
  selectedData: any;

  mode: string = 'selection';

  ngOnInit(): void {
    

    this.FacilityBookingService.getDataFromJson().subscribe((res) => {
      this.bookedData = res;      
    })
  }

  onModeChange(event) {
    this.mode = event;
    
  }

  onChangeMode(event) {
    this.mode = event.mode;
    this.selectedPlaceData = event.selectedPlaceData;
    
  }

  onchangeExternalMode(event) {
    this.mode = event;
  }
  onselectionPress(event){
    this.selectedData = event;
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { FacilityBookingService } from 'src/app/services/facility-booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  @Output() mode: any = new EventEmitter<any>();
  @Input() selectedData: any;

  facilityBookingForm = this.fb.group({
    booking_type: ['', Validators.required],
    booking_date: ['', Validators.required],
    booked_by: ['', Validators.required],
    place: ['', Validators.required],
    additional_services: [''],
    support_staff: ['']
  });
  radioData: any;

  selectedOptionState: boolean = false;

  changedValue: string;

  supportStaffValue: string;
  constructor(
    private fb: FormBuilder,
    private FacilityBookingService: FacilityBookingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getData()
  }

  onBackPress(){
    this.mode.emit({mode: 'selection'});
  }

  onFacilityDetailsSubmit() {
    this.facilityBookingForm.value.place = this.selectedData.place.fee_name;
    this.facilityBookingForm.value.booking_date = this.selectedData.date;
    this.facilityBookingForm.value.support_staff = this.facilityBookingForm.value.support_staff ? this.supportStaffValue : '';
    this.facilityBookingForm.value.additional_services = this.changedValue;
    if (this.facilityBookingForm.value.booking_type == 'external') {
      
      this.FacilityBookingService.insertFacilityData(this.facilityBookingForm.value).subscribe((res) => {
        console.log("response : ", res);
        this.mode.emit({mode: 'external booking', selectedPlaceData: res});
      })
      
    }
  }
  onSelect(e) {
    this.changedValue = e.target.value;
  }
  onAddServicePress(e) {
    console.log("event ", e.target.value);
    this.facilityBookingForm.value.additional_services = `${this.changedValue} ${e.target.value}`;
   
    

  }

  getData () {
    this.FacilityBookingService.getFacilityData().subscribe(
      (res) => {
        
        this.radioData = res.additionals;

        this.supportStaffValue = res.support[0].fee_name;
        
      }
    );
  }
}

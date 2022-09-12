import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FacilityBookingService } from 'src/app/services/facility-booking.service';

@Component({
  selector: 'app-external-booking',
  templateUrl: './external-booking.component.html',
  styleUrls: ['./external-booking.component.scss'],
  providers: [MessageService]
})
export class ExternalBookingComponent implements OnInit {
  @Input() selectedPlaceData: any;

  @Output() mode = new EventEmitter<any>();

  amount: number;

  confirmData: any;

  additionalService: string;

  supportStaff: string;

  amountstate: boolean = false;

  memberAmount: string;

  nonMemberAmount: string;

  constructor(private facilityBookingService: FacilityBookingService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.confirmData = this.selectedPlaceData.Data;

    if (this.confirmData.additional_services == null) {
      this.additionalService = 'none';
    } else {
      this.additionalService = this.confirmData.additional_services;
    }

    if (this.confirmData.support_staff == null) {
      this.supportStaff = 'No';
    } else if (this.confirmData.support_staff == 'Support Staff') {
      this.supportStaff = 'Yes';
    }
    var role = JSON.parse(localStorage.getItem('access_token')).role[0];
    debugger;
    if (role == 'NM') {
      this.amountstate = false;
      this.amount = this.selectedPlaceData.totalAmount;
    } else if (role == 'Nominee 2' || role == 'Nominee 1') {
      this.amountstate = false;
      this.amount = this.selectedPlaceData.totalAmount;
    } else if (role == 'UCCI Staff') {
      this.amountstate = true;
      this.memberAmount = this.selectedPlaceData.memberTotalAmount;
      this.nonMemberAmount = this.selectedPlaceData.nonMemberTotalAmount;
    }
  }
  onBackPress() {
    this.mode.emit('booking form');
  }
  onNextPress() {
    // this.mode.emit('approval');
    // debugger;
    var data: '';
    this.facilityBookingService.facilityPayment(
      this.selectedPlaceData.approvalToken,
      this.confirmData.id,
      data
    ).subscribe((data) => {
      console.log("response data : ", data);
      var msg = data.message
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: msg,
      });
    });
  }
}

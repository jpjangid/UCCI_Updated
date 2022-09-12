import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EventListingComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private route: Router, private messageService: MessageService, private __eventservice: EventService) { }
  breadcrumb: any[] = [
    {
      title: 'Events',
      subTitle: 'Masters',
    },
  ];
  loading: boolean = true;
  forms: any = []
  ngOnInit(): void {
    this.getAllEventsList();
  }

  //to delete event 
  deleteEvent(id:any) {
    console.log(id)
    this.confirmationService.confirm({
      message: 'Do you want to delete this event?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.__eventservice.deleteEvent(id).subscribe(
          (res: any) => {
            console.log(res);
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            this.forms = [];
            res.data?.map((response: any) => {
              this.forms.push(response);
            })
            this.loading = false;
          },
          (error: HttpErrorResponse) => {
            console.log(error)
            this.loading=false;
          })
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  // to edit event
  editEvent(form: any) {
    console.log(form)
    this.route.navigateByUrl('/event-form/' + form.id);
  }

  navigateToFormBuilder() {
    this.route.navigateByUrl('/event-form');
  }

  onReject() {
    this.messageService.clear('c');
  }

  //to get all custom forms
  getAllEventsList() {
    this.forms = []
    this.__eventservice.getEventsList().subscribe(
      (res: any) => {
        console.log(res);
        res?.map((response: any) => {
          this.forms.push(response);
        })
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.loading = false;
      })
  }

}

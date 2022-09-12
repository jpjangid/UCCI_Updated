import { Injectable } from '@angular/core';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HTTPApi) { }
  //get all event list
  getEventsList() {
    return this.http.get('event');
  }

  //to create event 
  createEvent(formData:any) {
    return this.http.post('event',formData)
  }

  //get event by id
  getEventById(id:any) {
    return this.http.get('event/'+id)
  }

  //to update event form 
  updateEventForm(id:any , formData:any) {
    return this.http.put('event/'+id , formData)
  }

  //to delete an event
  deleteEvent(id:any) {
    return this.http.delete('event/'+id)
  }

}

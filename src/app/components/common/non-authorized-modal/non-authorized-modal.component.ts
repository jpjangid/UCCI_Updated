import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-authorized-modal',
  templateUrl: './non-authorized-modal.component.html',
  styleUrls: ['./non-authorized-modal.component.scss']
})
export class NonAuthorizedModalComponent implements OnInit {
  displayBasic: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

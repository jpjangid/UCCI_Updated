import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss'],
})
export class EventsDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  heading: string = 'Event Form';
  jsonData: any = {
    controls: [
      {
        id: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'Enter Email',
        required: true,
        type: 'email',
        validators: { required: true },
        value: '',
      },
      {
        id: 'password',
        label: 'Password',
        name: 'password',
        placeholder: 'Enter password',
        required: true,
        type: 'password',
        validators: { required: true },
        value: '',
      },
      {
        id: 'text',
        name: 'text',
        placeholder: 'Enter Text Here',
        label: 'Text Box',
        value: '',
        type: 'text',
        required: true,
        validators: {
          required: false,
        },
        layout: 'col-lg-12',
      },
      {
        id: 'area',
        name: 'area',
        placeholder: 'Enter Description',
        label: 'Text Area',
        value: '',
        type: 'textarea',
        required: true,
        validators: {
          required: false,
        },
        layout: 'col-lg-12',
      },
      {
        id: "button",
        name: "button",
        label: "Button",
        type: "submit",
        validators: {},
        layout:"col-lg-12"
      }
    ],
  };
  pageTitleContent = [
    {
      title: 'Digital Marketing: Customer Engagement & Social Media',
      backgroundImage: 'assets/img/page-title/page-title2.jpg',
    },
  ];
}

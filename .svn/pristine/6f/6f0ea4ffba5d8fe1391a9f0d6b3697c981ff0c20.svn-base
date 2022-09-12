import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-visa-form',
  templateUrl: './visa-form.component.html',
  styleUrls: ['./visa-form.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class VisaFormComponent implements OnInit {

  breadcrumb: any[] = [
    {
      title: 'Visa Recomendation',
      subTitle: 'Visa Service',
    },
  ];
  

  visaRecommendationForm = this.fb.group({
    companyName: ['', Validators.required],
    category: ['', Validators.required],
    embassySelect: ['', Validators.required],
    country: ['', Validators.required],
    subject: ['', Validators.required],
    address: ['', Validators.required],
    visitCountry: ['', Validators.required],
    visitPeriod: ['', Validators.required],
    reason: ['', Validators.required],
    namePrefix: ['', Validators.required],
    name: ['', Validators.required],
    designation: ['', Validators.required],
    workPlace: ['', Validators.required],
    nationality: ['', Validators.required],
    dob: ['', Validators.required],
    birthPlace: ['', Validators.required],
    passportNo: ['', Validators.required],
    issueDate: ['', Validators.required],
    issuePlace: ['', Validators.required],
    expiryDate: ['', Validators.required],
    document: ['', Validators.required]
  });

  CategoryDropDown: any = [
    {id: 1, name: '---Select Category---'},
    {id: 1, name: 'Category 1'},
    {id: 1, name: 'Category 2'},
    {id: 1, name: 'Category 3'},
    {id: 1, name: 'Category 4'},
  ];

  preFix: any = [
    {id: 1, name: 'Ms'},
    {id: 1, name: 'Mrs'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.visaRecommendationForm.value);
    
  }
}

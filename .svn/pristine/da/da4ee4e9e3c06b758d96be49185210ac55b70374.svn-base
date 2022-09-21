import { Component, OnInit } from '@angular/core';
import {
  NgWizardConfig,
  NgWizardService,
  StepChangedArgs,
  StepValidationArgs,
  STEP_STATE,
  THEME,
} from 'ng-wizard';
import { arrow } from '@popperjs/core';

@Component({
  selector: 'app-visa-service',
  templateUrl: './visa-service.component.html',
  styleUrls: ['./visa-service.component.scss'],
})
export class VisaServiceComponent implements OnInit {
  breadcrumb: any[] = [
    {
      title: 'Visa Recomendation',
      subTitle: 'Visa Service',
    },
  ];

  state: boolean = false;

  hide: boolean = true;

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden,
  };

  config: NgWizardConfig;
  
  submitedData: any;
  statusMsg: any;
  

  constructor(private ngWizardService: NgWizardService) {}

  ngOnInit(): void {
    this.ngWizardService.theme(THEME.arrows);
    this.config = {
      selected: 0,
      theme: THEME.arrows,
      toolbarSettings: {
        showNextButton: false,
        showPreviousButton: false,
        toolbarExtraButtons: [
          // { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
        ],
      },
    };
  }
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep() {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  getData(event) {
    console.log("event ", event);

    this.submitedData = event;
    
  }

  setStatusMsg(e) {
    this.statusMsg = e;
  }
}

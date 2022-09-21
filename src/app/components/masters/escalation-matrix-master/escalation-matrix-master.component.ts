import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EscalationMatrixMasterService } from 'src/app/services/escalation-matrix-master.service';
import { RaiseIssueService } from 'src/app/services/raise-issue.service';

@Component({
  selector: 'app-escalation-matrix-master',
  templateUrl: './escalation-matrix-master.component.html',
  styleUrls: ['./escalation-matrix-master.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class EscalationMatrixMasterComponent implements OnInit {
  submitted:false;
  constructor(private messageService: MessageService, private escalationmasterservice : EscalationMatrixMasterService) { }

  ngOnInit(): void {
  }
  escalationMatrixForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    issuetype: new FormControl('', [Validators.required]),
    escalationlevel: new FormControl('', [Validators.required]),
    expiresin: new FormControl('', [Validators.required])
  })
  escalationForm() {
    let formData = new FormData()
    if (this.escalationMatrixForm.valid) {
      let data = this.escalationMatrixForm.value
      formData.append('user_id', data.userid);
      formData.append('username', data.username);
      formData.append('issues_types_id', data.issuetype);
      formData.append('escalation_levels', data.escalationlevel);
      formData.append('expires_in', data.expiresin);
    
      this.escalationmasterservice.createMatrixForm(formData).subscribe((res: any) => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message
        });
      },
      )
    }
    // this.submitted = true;
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.escalationMatrixForm.controls;
  }

}

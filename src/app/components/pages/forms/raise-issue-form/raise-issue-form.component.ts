import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { RaiseIssueService } from 'src/app/services/raise-issue.service';

@Component({
  selector: 'app-raise-issue-form',
  templateUrl: './raise-issue-form.component.html',
  styleUrls: ['./raise-issue-form.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class RaiseIssueFormComponent implements OnInit {
  submitted = false;
  issueTypes: any = [];
  memberData: any = [];
  nomineeOneDetils: any = [];
  constructor(
    private raiseIssueService: RaiseIssueService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getIssueTypes();
  }
  getIssueTypes() {
    this.raiseIssueService.getIssues().subscribe((res: any) => {
      this.issueTypes = res.issueTypes;
      console.log(this.issueTypes);
      this.memberData = res.memberData;
      console.log(res.memberData);
      this.memberData?.map((response: any) => {
        this.nomineeOneDetils.push(response.nominee1, response.nominee2);
        console.log(this.nomineeOneDetils);
      });
    });
  }
  raiseIssueForm = new FormGroup({
    memberid: new FormControl('', [Validators.required]),
    nomineeid: new FormControl('', [Validators.required]),
    issuetypeid: new FormControl(null, [Validators.required]),
    location: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  raiseIssue(form) {
    let formData = new FormData();
    if (this.raiseIssueForm.valid) {
      let data = this.raiseIssueForm.value;
      formData.append('member_id', data.memberid);
      formData.append('nominee_id', data.nomineeid);
      formData.append('issue_type_id', data.issuetypeid);
      formData.append('location', data.location);
      formData.append('priority', data.priority);
      formData.append('description', data.description);
      this.raiseIssueService.raiseIssueForm(formData).subscribe((res: any) => {
        console.log(res);
        this.raiseIssueForm.reset();
        Object.keys(this.raiseIssueForm.controls).forEach((key) => {
          this.raiseIssueForm.setErrors(null);
        });

        form.resetForm();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      });
    }
    this.submitted = true;
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.raiseIssueForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { RaiseIssueService } from 'src/app/services/raise-issue.service';
import { CommonClass } from 'src/app/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-raise-issues-list',
  templateUrl: './raise-issues-list.component.html',
  styleUrls: ['./raise-issues-list.component.scss']
})
export class RaiseIssuesListComponent implements OnInit {
  getIssueData: any = [];
  loading: boolean = false;
  display: boolean = false;
  displayDetails: boolean = false;
  visibleSidebar2;
  issuesActions: any = [];
  localStorage: any;
  constructor(private commonFunction: CommonClass, private raiseissueservice: RaiseIssueService) { }

  ngOnInit(): void {
    this.localStorage = this.commonFunction.getLocalStorage();
    this.getAllRaiseIssues()
  }
  // show details dialog
  showDetailsDialog() {
    this.displayDetails = true;
  }
  // get all raised issue
  getAllRaiseIssues() {
    this.raiseissueservice.getRaiseIssues().subscribe((res: any) => {
      this.getIssueData = res.allIssues
      res.allIssues?.map((response: any) => {
        response.actions?.map((object: any) => {
          this.issuesActions.push(object)
        })
      })
      console.log(res);
      console.log(this.issuesActions)
    });
  }
  // form control
  raiseIssueStatusForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
    remark: new FormControl('', [Validators.required])
  })
  // update status of raise issue
  updateIssueStatus(id?: any) {
    let formData = new FormData();
    let data = this.raiseIssueStatusForm.value;
    console.log(this.raiseIssueStatusForm.value, this.raiseIssueStatusForm.valid);
    if (this.raiseIssueStatusForm.valid) {
      formData.append('status', data.status);
      formData.append('remark', data.remark);
    }
    // this.raiseissueservice.updateStatus(this.statusId, formData).subscribe((res: any) => {
    //   console.log(res);
    // })
    // this.raiseissueservice.updateStatus(this.id, FormData).subscribe((res: any) => {
    //   console.log(res);
    // })
  }
  statusId: any;
  // show dialog
  showDialog(id?: any) {

    console.log(id);
    
    this.display = true;
    this.statusId = this.issuesActions[id].id;
    console.log(this.statusId, this.issuesActions[id].id);
  }
}

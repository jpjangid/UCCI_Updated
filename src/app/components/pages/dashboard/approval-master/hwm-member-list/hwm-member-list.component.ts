import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hwm-member-list',
  templateUrl: './hwm-member-list.component.html',
  styleUrls: ['./hwm-member-list.component.scss'],
  providers:[MessageService,ConfirmationService]
})
export class HwmMemberListComponent implements OnInit {
  hwmMemberList:any=[]
  loading:boolean=false
  constructor(private __apiservice : ApiService,private confirmationService:ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.loading=true;
    this.__apiservice.getHwmMemberList().subscribe((res:any)=> {
      console.log(res)
      this.hwmMemberList=res.data;
      this.loading=false;
    },
    (error:any) => {
      console.log(error);
      this.loading=false
    })
  }

  // to approve and reject hwm member 
  approveMemberById(id?:any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: (res: any) => {
        this.__apiservice.hwmMemberApproval(id).subscribe((res: any) => {
          console.log(res);
          this.messageService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: res.message,
          });
        });
      },
    });
  }

}

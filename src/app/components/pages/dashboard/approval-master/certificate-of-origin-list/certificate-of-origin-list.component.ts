import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-certificate-of-origin-list',
  templateUrl: './certificate-of-origin-list.component.html',
  styleUrls: ['./certificate-of-origin-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class CertificateOfOriginListComponent implements OnInit {
  cooMemberList: any = [];
  constructor(private apiservice: ApiService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllCertificateList();
  }
  // get certificate origin all list
  getAllCertificateList() {
    this.apiservice.getCertificateofOriginList().subscribe((res: any) => {
      console.log(res);
      this.cooMemberList = res.data;
    })
  }

  // verify certificate of origin
  verifyCertificateOfOrigin(id: any) {
    this.apiservice.verifycertificate(id).subscribe((res: any) => {
      console.log(res);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res.message
      });
    })
  }
  delete(id: any) {
    for (let i = 0; i < this.cooMemberList.length; ++i) {
      if (this.cooMemberList[i].id === id) {
        this.cooMemberList.splice(i, 1);
      }
    }
  }
}

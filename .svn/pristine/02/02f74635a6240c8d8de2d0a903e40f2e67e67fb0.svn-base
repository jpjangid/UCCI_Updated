import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-document-attestation-list',
  templateUrl: './document-attestation-list.component.html',
  styleUrls: ['./document-attestation-list.component.scss']
})
export class DocumentAttestationListComponent implements OnInit {
  docAttestationList: any = [];
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getAllDocumentList();
  }
  getAllDocumentList() {
    this.apiservice.getDocumentAttestationList().subscribe((res: any) => {
      // console.log(res);
      this.docAttestationList = res.data;
    })
  }
  // verify document by id, token
  verifyDocumentAttestation(token: any, id: any) {
    this.apiservice.verifyDocumentAttestation(token, id).subscribe((res: any) => {
      // console.log(token,id);
    })
  }
}

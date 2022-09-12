import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-regular-member-list',
  templateUrl: './regular-member-list.component.html',
  styleUrls: ['./regular-member-list.component.scss']
})
export class RegularMemberListComponent implements OnInit {
  regularMemberList: any = [];
  loading:boolean=false;
  constructor(private apiservice: ApiService) { }
  
  ngOnInit(): void {
    this.getRegularMemberListFunction()
  }
  // get regular member list api call 
  getRegularMemberListFunction() {
    this.loading=true;
    this.apiservice.getregularMemberList().subscribe((res:any) => {
      this.regularMemberList = res.data;
      console.log(this.regularMemberList);
      this.loading=false
    },
    (error:any)=> {
      this.loading=false
    })
  }
}

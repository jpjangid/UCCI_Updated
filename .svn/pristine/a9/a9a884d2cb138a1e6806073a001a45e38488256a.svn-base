import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-call-member',
  templateUrl: './call-member.component.html',
  styleUrls: ['./call-member.component.scss'],
  providers: [MessageService, ConfirmationService],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class CallMemberComponent implements OnInit {
  @ViewChild('dt1') FilteredData: Table
  memberList: any = [];
  visibleSidebar2;
  loading: boolean = true;
  categoryName: any = [];
  getFilterName: any = [];
  getFilterDropdown: any = [];
  filters: any;
  saveBtnCheck: boolean = true;
  display: boolean = false;
  filterName: any;
  filterdData: any = [];
  constructor(private apiservie: ApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.getMemberListData();
    this.getAllFilterCategory();
  }
  // get sidebar filter category
  getAllFilterCategory() {
    this.apiservie.getSideFilterCategory().subscribe((res: any) => {
      this.getFilterName = res.filters;
      console.log(this.getFilterName);
      res.filters?.map((response: any) => {
        response.value?.map((data: any) => {
          this.getFilterDropdown.push(data);
        })
      })
    })
  }
  // all member contact list
  getMemberListData() {
    this.apiservie.getMemberList().subscribe((res: any) => {
      this.memberList = res.data;
      console.log(res.data);
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Success',
      //   detail: res.message
      // });
      this.loading = false;
    })
  }
  // clear all filter button function
  clear(table: any) {
    table.clear();
  }
  // get filterd data
  saveFilterData(data) {
    this.filters = data.filters;
    this.filterdData = data.filteredValue;
    console.log(data);
  }
  // create new filter api
  saveNewFilter() {
    let stringifyFilter = JSON.stringify(this.filters)
    let createFilterJson = { filter_name: this.filterName, filter_string: stringifyFilter }
    this.apiservie.createNewFilter(createFilterJson).subscribe((res: any) => {
      console.log(res);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res.message
      });
    })
    this.display = false;
  }
  // show dialog
  showDialog() {
    this.display = true;
  }
  getStringifyFilter(value) {
     var filter = JSON.parse(value.filter_string);
    this.FilteredData.filters = filter;
    
     console.log(this.FilteredData)

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-selected-place-aprroval',
  templateUrl: './selected-place-aprroval.component.html',
  styleUrls: ['./selected-place-aprroval.component.scss'],
})
export class SelectedPlaceAprrovalComponent implements OnInit {

  @Input() selectedFacilityData: any;

  dataForAproval: any = [];

  constructor(private activatedroute: ActivatedRoute, private router: Router) {}

  

  ngOnInit(): void {
    // this.selectedFacilityData.bookfacility.forEach((value) => {
    //   var d = moment(value.booking_date).format('DD/MM/YYYY');
    //   console.log("formated date :", d);
    //   value.booking_date = d;
      
    //   console.log(value);
    //   this.dataForAproval.push(value);
      
    // })
    console.log("selectedFacilityData :", this.selectedFacilityData);
    
    // this.activatedroute.queryParams.subscribe((data) => {
    //   // this.product=data;
    // //  if(data){
    // //   // let object = JSON.parse(data);

    // //  }
    // // data.bookfacility.forEach((data) => {
    // //   console.log("foreACH DATA : ", data);
      
    // // })
    //   // console.log('selected data : ',data);
    // });
  }
}

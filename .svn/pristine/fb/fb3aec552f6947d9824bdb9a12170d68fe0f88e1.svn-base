import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() msg: string;
  constructor() { }

  ngOnInit(): void {
    this.msg = this.msg? this.msg : 'loading...';
  }

}

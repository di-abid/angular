import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-comp',
  templateUrl: './month-comp.component.html',
  styleUrls: ['./month-comp.component.css']
})
export class MonthCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedMonth = '';
  months = ["","January","February","March","April","May","June","July","August","September","October",
  "November","December"];

  changeMonths(event){
    this.selectedMonth = event.target.value;
  }
}

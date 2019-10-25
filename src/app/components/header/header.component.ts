import { Component, OnInit } from '@angular/core';
import { DateserviceService } from "../../services/dateservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'first-project';
  developer = 'Abid';
  date;
  constructor(private dateservice: DateserviceService) { }
 
  ngOnInit() {
    this.date = this.dateservice.getTodaysDate();
  }
  
}

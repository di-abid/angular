import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private http: Http) { }
  
  httpdata;
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
    map((response) => response.json()).
    subscribe((data) => {this.displaydata(data);})    
  }
  displaydata(data) {this.httpdata = data;}
  imageText = "This is users page";
}

import { Injectable } from '@angular/core';

@Injectable()
export class DateserviceService {

  constructor() { }
  getTodaysDate(){
    let ndate = new Date();
    return ndate;
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare function require(url: string);
@Injectable()
export class AppurlService {
  domain: string;
  constructor() { 
    this.domain = environment.domain;
  }

  getNewBookUrl(){
    return `${this.domain}portal/api/newbook`;
  }
}

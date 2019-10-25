import { Injectable } from '@angular/core';
import { AppurlService } from '../appurl.service';
import { NewBook } from 'src/app/models/new-book/new-book';

@Injectable()
export class BookService {

  constructor(private appurl:AppurlService) { }

  createBook(newBook: NewBook){
    const url = this.appurl.getNewBookUrl();
    alert(url);
  }
}

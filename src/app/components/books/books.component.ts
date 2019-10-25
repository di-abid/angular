import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {NewBook} from '../../models/new-book/new-book';
import { BookService } from 'src/app/services/book/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookForm: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.addBookForm = new FormGroup({
      bookName: new FormControl(''),
      bookAuthor: new FormControl(''),
      bookCategory: new FormControl(''),
      bookPublication: new FormControl(''),
      bookPublicationDate: new FormControl(''),
      bookPrice: new FormControl('')

    });
  }
  bookPage = 'This is Books Page';
  selectedBook = '';
  booksArr = ["","Java","Spring","Spring Boot","Spring Mvc","Hibernate","Angular","Cassandra","Neo4j"];

  changeMonths(event){
    this.selectedBook = event.target.value;
  }

  bookSubmit(event){
    this.createNewBook(event);
  }

  createNewBook(newBook: NewBook){
    this.bookService.createBook(newBook);
  }
}

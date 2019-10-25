import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from 'src/app/services/book/book.service';
import { AppurlService } from 'src/app/services/appurl.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BookService,AppurlService]
})
export class ComponentModule { }

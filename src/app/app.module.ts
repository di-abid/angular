import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MonthCompComponent } from './components/month-comp/month-comp.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibraryComponent } from './components/library/library.component';
import { BooksComponent } from './components/books/books.component';
import { ImagesComponent } from './components/images/images.component';
import { VideosComponent } from './components/videos/videos.component';
import { DateserviceService } from "./services/dateservice.service";
import { HttpModule } from "@angular/http";
import { ComponentModule } from './components/component.module';
@NgModule({
  declarations: [
    AppComponent,
    MonthCompComponent,
    HeaderComponent,
    FooterComponent,
    LibraryComponent,
    BooksComponent,
    ImagesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    RouterModule.forRoot([
      {
        path: 'books',
        component : BooksComponent
      },
      {
        path : 'library',
        component : LibraryComponent
      },
      {
        path : 'images',
        component : ImagesComponent
      },
      {
        path : 'videos',
        component : VideosComponent
      }
    ],
    ),HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

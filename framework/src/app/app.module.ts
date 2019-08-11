import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { RatingComponent } from './rating/rating.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { EmailService } from './email.service';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RatingComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    EmailService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

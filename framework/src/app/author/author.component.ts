import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

   authorEmail:string[];
   authorName: string [];
   authorLocations:string[];
  constructor(email:EmailService,location:LocationService) {

      this.authorEmail = email.getAuthorEmail();
      this.authorName = email.getAuthorName();
      this.authorLocations = location.getLocation();
   }

  ngOnInit() {
  }

}

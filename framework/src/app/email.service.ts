import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getAuthorEmail()
  {
    return ["navaneethb@gmail.com", "ashwithabhat@gmail.com"]
  }

  getAuthorName(){

    return ["Navaneeth B", "Ashwitha Bhat"];
  }
}

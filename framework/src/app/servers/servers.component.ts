import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServerAdd = false;
  constructor() { 

    setTimeout(()=>{
      this.allowServerAdd = true;
    },3000);
  }

  ngOnInit() {
  }

}

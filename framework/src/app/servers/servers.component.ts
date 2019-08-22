import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disableServerAdd = false;
  noServer = 0;
  serverStatus= "No Server Created";
  constructor() { 

    
  }

  ngOnInit() {
  }
  onServerCreation()
  {
    this.noServer+=1;
    this.serverStatus = "";

  }
}

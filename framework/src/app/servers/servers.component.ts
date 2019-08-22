import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disableServerAdd = false;
  disableServerDelete = false;
  noServer = 1;
  serverStatus= "No. Server Created";
  totalServer = 10;
  constructor() { 

    
  }

  ngOnInit() {
  }
  onServerCreation()
  {
      this.noServer+=1;
      this.serverStatus = "";
      if(this.noServer==this.totalServer){
        this.disableServerAdd = true;
        this.serverStatus = "Server is Full";
  }   
        if(this.noServer>=0){
          this.disableServerDelete = false;
        }
  }
  onServerDelete(){
    this.noServer-=1;
    if(this.noServer<=this.totalServer)
    {
      this.disableServerAdd = false;
    }
    if(this.noServer==0)
    {
      this.disableServerDelete = true;
      this.serverStatus = "Empty Server";
    }
  }
}

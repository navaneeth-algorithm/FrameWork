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
  serverName = "";
  totalServer = 10;
  serverList = [];
  constructor() { 

    
  }

  ngOnInit() {
  }
  onServerCreation()
  {
      
      this.serverStatus = "";
      if(this.noServer==this.totalServer){
        this.disableServerAdd = true;
        this.serverStatus = "Server is Full";
      }
      else{
        this.serverList.push(this.serverName);
        this.noServer=this.serverList.length;
        console.log(this.serverList);
      }   
        if(this.noServer>0){
          this.disableServerDelete = false;
        }
  }
  onServerDelete(){
    
    if(this.noServer<this.totalServer)
    {
      this.disableServerAdd = false;
    }
    if(this.noServer==0)
    {
      this.disableServerDelete = true;
      this.serverStatus = "Empty Server";
      this.serverList = []
    }
    else{
      this.serverStatus = "";
      this.serverList.pop();
      this.noServer=this.serverList.length;
    }
  }

  onServerNameUpdate(event:any)
  {
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }
}

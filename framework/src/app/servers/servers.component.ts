import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  noServer = 0;
  serverStatus= "";
  serverName = "";
  totalServer = 10;

  serverActiveList = [];
  serverInactiveList = [];
  serverActivityStatus = "Active";

  serverList = [];

  nameUser = '';
  passwordUser = '';
  constructor() { 
    this.serverStatus= "Server Stack is Empty";
  }

  ngOnInit() {
  }
  onServerCreation()
  {
        this.serverStatus = "";
        this.serverList.push(this.serverName);
        this.noServer=this.serverList.length;
        console.log(this.serverList);  
       
  }
  onServerDelete(){
      this.serverStatus = "";
      this.serverList.pop();
      this.noServer=this.serverList.length;
  }
  checkButtonStatusAdd()
  {
    if(this.noServer==this.totalServer){
      this.serverStatus = "Server Stack is Full";
      return true;
    }
    return false;
  }
  checkButtonStatusDelete()
  {
    if(this.noServer==0){
      this.serverStatus = "Server Stack is Empty";
      return true;
    }
    return false;
  }
  onServerNameUpdate(event:any)
  {
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }
}

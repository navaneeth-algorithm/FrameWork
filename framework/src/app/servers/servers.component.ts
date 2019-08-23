import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  noServer = 0;
  serverstackStatus= "";
  serverformStatus = false;
  serverName = "";
  totalServer = 10;

  serverActiveList = [];
  serverInactiveList = [];
  serverActivityStatus = "Active";

  serverList = [];

  nameUser = '';
  passwordUser = '';
  constructor() { 
    this.serverstackStatus= "Server Stack is Empty";
  }

  ngOnInit() {
  }
  onServerCreation()
  {
        this.serverstackStatus = "";
        this.serverList.push(this.serverName);
        this.noServer=this.serverList.length;
        this.serverformStatus = true;
        console.log(this.serverList);  
       
  }
  onServerDelete(){
      this.serverstackStatus = "";
      this.serverList.pop();
      this.noServer=this.serverList.length;
  }
  checkButtonStatusAdd()
  {
    if(this.noServer==this.totalServer){
      this.serverstackStatus = "Server Stack is Full";
      return true;
    }
    return false;
  }
  checkButtonStatusDelete()
  {
    if(this.noServer==0){
      this.serverstackStatus = "Server Stack is Empty";
      return true;
    }
    return false;
  }
  onServerNameUpdate(event:any)
  {
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }
  getServerFormStatus()
  {
    //This combines with formStatus to display Server Created message for 3sec
    setTimeout(() => {
      this.serverformStatus = false;
    }, 3000);
    
    return this.serverformStatus;
  }
}

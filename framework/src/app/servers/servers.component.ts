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
    //This function adds the Server name to the List and called when CreateServer button is clicked
        this.serverstackStatus = "";
       
          this.serverList.push(this.serverName);
          this.noServer=this.serverList.length;
          this.serverformStatus = true;
          console.log(this.serverList);       
       
  }
  onServerDelete(element:number){
      this.serverstackStatus = "";

      //Delete Only assgn eleemnt to undefined
      //delete this.serverList[element];

      //This splice takes index of element nd no of element to del starting
      //from that index
      this.serverList.splice(element,1);

      //Pop removes last element
      //this.serverList.pop();
      this.noServer=this.serverList.length;
  }
  checkButtonStatusAdd(setStatus=false)
  {
    if(this.noServer==this.totalServer){
      this.serverstackStatus = "Server Stack is Full";
      return true;
    }
    return setStatus;
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

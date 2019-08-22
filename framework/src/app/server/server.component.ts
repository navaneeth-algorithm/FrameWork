import { Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{
  serverId:number = 1;
  serverName:string = "Google";
  serverStatus:string ="Offline";
  locations:string[] = ["Udupi","Manipal","Mangalore"];
  getServerName(){
    return this.serverName;
  }
}

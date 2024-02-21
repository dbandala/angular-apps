import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit{
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverStatus = 'online';
    this.serverCreationStatus = 'Server was created! The server is ' + this.serverStatus+ '\nServer Name: ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

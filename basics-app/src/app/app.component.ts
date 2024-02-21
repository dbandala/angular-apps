import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'basics-app';
  username = '';
  showSecret = false;
  log = [];

  constructor () { }

  ngOnInit() {
    this.username = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());

  }
}

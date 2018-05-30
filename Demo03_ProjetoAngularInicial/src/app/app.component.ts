import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  count = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.title = `Hello ${this.count++}`;
    }, 2000);
  }

}

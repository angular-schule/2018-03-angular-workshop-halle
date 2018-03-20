import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Book Rating';
  url = 'https://angular.schule';
  d = new Date();

  constructor() {
    setTimeout(() => this.title = 'Book Rating!', 2000);
  }
}

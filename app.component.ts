import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h1>Hello {{name}}</h1>',
})
export class AppComponent {
  title = 'my-first-app';
  name='Angular';
}

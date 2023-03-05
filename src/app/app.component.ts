import { Component } from '@angular/core';

@Component({
  selector: 'kvcdr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName: string = 'Property Rental';
  sideNaveOpened : boolean = true;
}

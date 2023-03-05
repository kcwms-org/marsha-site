import { Component } from '@angular/core';

@Component({
  selector: 'kvcdr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  getStartedText: string = "Let's review some homes! Look to your left.";

  public testCards: { cardNumber: string, cardType: 'Successful' | 'Failed' | 'Requires Authentication' }[] = [
    { cardNumber: '4242424242424242', cardType: 'Successful' },
    { cardNumber: '4000000000009995', cardType: 'Failed' },
    { cardNumber: '4000002500003155', cardType: 'Requires Authentication' }
  ];
}

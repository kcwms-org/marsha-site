import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kvcdr-stripe-results',
  templateUrl: './stripe-results.component.html',
  styleUrls: ['./stripe-results.component.scss']
})
export class StripeResultsComponent {
  action: 'success' | 'fail' = 'fail';

  constructor(private route: ActivatedRoute) {
    this.action = this.route.snapshot.data['action'];
  }
}

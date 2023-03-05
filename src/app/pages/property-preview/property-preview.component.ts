import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'kvcdr-property-preview',
  templateUrl: './property-preview.component.html',
  styleUrls: ['./property-preview.component.scss']
})
export class PropertyPreviewComponent {

  private stripeEndpoint = 'create-checkout-session';

  domain: string = window.location.origin;
  productId: string = 'price_1MfVQ8AXcHqp4mKL5ELPmfSK';
  quantity: number = 1;

  constructor(private http: HttpClient) { }

  onSubmit() {
    debugger;
    const payload = {
      "domain": this.domain,
      "successRoute": '/striperesults/success',
      "failRoute": "/striperesults/fail",
      "productId": this.productId,
      "quantity": this.quantity
    }
    this.http.post<{ url: string }>(`${environment.apiUrlWithTrailingSlash}${this.stripeEndpoint}`, payload).subscribe(
      {
        next: (r) => {
          debugger;
          if (r?.url) {
            console.info('response', r);
            window.open(r.url, '_blank');
          }
        },
        error: (err) => console.error('failed', err)
      })
  }
}

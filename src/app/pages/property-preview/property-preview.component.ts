import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Product } from "kvcdr-stripe-view-models";
@Component({
  selector: 'kvcdr-property-preview',
  templateUrl: './property-preview.component.html',
  styleUrls: ['./property-preview.component.scss']
})
export class PropertyPreviewComponent implements OnInit {
  
  private stripeEndpoint = 'create-checkout-session';
  private stripeGetProductsEndpoint = 'products';

  domain: string = window.location.origin;

  productList: Product[] = [];

  productId: string = 'price_1MfVQ8AXcHqp4mKL5ELPmfSK';
  quantity: number = 1;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get<Product[]>(`${environment.apiUrlWithTrailingSlash}${this.stripeGetProductsEndpoint}?active=true`, { withCredentials: true })
      .subscribe(
        {
          next: (r) => {
            if (r) {
              this.productList = r;
            }
          },
          error: (err) => console.error('/products', err)
        }
      );
  }

  onSubmit(price_id: string, type: string) {
    debugger;
    const payload = {
      "domain": this.domain,
      "successRoute": '/striperesult/success',
      "failRoute": "/striperesult/fail",
      "productId": price_id,
      "quantity": this.quantity
    }
    console.info(payload);
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

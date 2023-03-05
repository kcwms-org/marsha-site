import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StripeResultsComponent } from './pages/stripe-results/stripe-results.component';

const routes: Routes = [
  { path: 'striperesult/success', component: StripeResultsComponent, data: { action: 'success' } },
  { path: 'striperesult/fail', component: StripeResultsComponent, data: { action: 'fail' } },
  { path: 'home', component: HomeComponent , data: {url: ''}},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

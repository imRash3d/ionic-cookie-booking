import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCheckoutPage } from './app-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: AppCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCheckoutPageRoutingModule {}

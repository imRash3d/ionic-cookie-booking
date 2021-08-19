import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCustomerPage } from './app-customer.page';

const routes: Routes = [
  {
    path: '',
    component: AppCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCustomerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCustomerDetailPage } from './app-customer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AppCustomerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCustomerDetailPageRoutingModule {}

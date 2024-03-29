import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppProductDetailPage } from './app-product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AppProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppProductDetailPageRoutingModule {}

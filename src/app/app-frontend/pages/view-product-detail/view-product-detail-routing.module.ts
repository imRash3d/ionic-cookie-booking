import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductDetailPage } from './view-product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductDetailPageRoutingModule {}

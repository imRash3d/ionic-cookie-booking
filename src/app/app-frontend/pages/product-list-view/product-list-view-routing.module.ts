import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListViewPage } from './product-list-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListViewPageRoutingModule {}

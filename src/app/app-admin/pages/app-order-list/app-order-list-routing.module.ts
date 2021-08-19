import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppOrderListPage } from './app-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: AppOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppOrderListPageRoutingModule {}

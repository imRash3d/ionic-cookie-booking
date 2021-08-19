import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAssignedOrderListPage } from './app-assigned-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: AppAssignedOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAssignedOrderListPageRoutingModule {}

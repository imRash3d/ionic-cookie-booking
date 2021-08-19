import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppOrderDetailPage } from './app-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AppOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppOrderDetailPageRoutingModule {}

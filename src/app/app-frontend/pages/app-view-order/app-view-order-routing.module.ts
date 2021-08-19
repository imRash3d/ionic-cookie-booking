import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppViewOrderPage } from './app-view-order.page';

const routes: Routes = [
  {
    path: '',
    component: AppViewOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppViewOrderPageRoutingModule {}

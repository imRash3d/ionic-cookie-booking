import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAddCartPage } from './app-add-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AppAddCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAddCartPageRoutingModule {}

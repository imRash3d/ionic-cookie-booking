import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCategoryPage } from './app-category.page';

const routes: Routes = [
  {
    path: '',
    component: AppCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCategoryPageRoutingModule {}

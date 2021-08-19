import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppChangePasswordPage } from './app-change-password.page';

const routes: Routes = [
  {
    path: '',
    component: AppChangePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppChangePasswordPageRoutingModule {}

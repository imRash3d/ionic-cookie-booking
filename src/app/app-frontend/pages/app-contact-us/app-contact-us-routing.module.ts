import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContactUsPage } from './app-contact-us.page';

const routes: Routes = [
  {
    path: '',
    component: AppContactUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppContactUsPageRoutingModule {}

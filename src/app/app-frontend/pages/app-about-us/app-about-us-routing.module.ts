import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAboutUsPage } from './app-about-us.page';

const routes: Routes = [
  {
    path: '',
    component: AppAboutUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAboutUsPageRoutingModule {}

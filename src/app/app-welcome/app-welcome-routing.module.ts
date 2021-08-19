import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppWelcomePage } from './app-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: AppWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppWelcomePageRoutingModule {}

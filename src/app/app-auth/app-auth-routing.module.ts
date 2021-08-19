import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthPage } from './app-auth.page';

const routes: Routes = [
  {
    path: '',
    component: AppAuthPage
  },
  {
    path: 'edit/profile/:userId',
    loadChildren: () => import('./app-profile/app-profile.module').then( m => m.AppProfilePageModule)
  },
  {
    path: 'change-password/:userId',
    loadChildren: () => import('./app-change-password/app-change-password.module').then( m => m.AppChangePasswordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAuthPageRoutingModule {}

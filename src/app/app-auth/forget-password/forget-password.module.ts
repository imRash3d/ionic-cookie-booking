import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedDataModule } from 'src/app/shared-data/shared-data.module';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordPage } from './forget-password.page';
const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedDataModule
  ],
  declarations: [ForgetPasswordPage]
})
export class ForgetPasswordPageModule {}

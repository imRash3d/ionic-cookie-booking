import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppChangePasswordPageRoutingModule } from './app-change-password-routing.module';

import { AppChangePasswordPage } from './app-change-password.page';
import { SharedDataModule } from 'src/app/shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedDataModule,
    AppChangePasswordPageRoutingModule
  ],
  declarations: [AppChangePasswordPage]
})
export class AppChangePasswordPageModule {}
